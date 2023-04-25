from fastapi import FastAPI,UploadFile,File,Depends, APIRouter, Body
from schemas import Patient
from bson.objectid import ObjectId
from database import patients_collection
import pydantic
pydantic.json.ENCODERS_BY_TYPE[ObjectId]=str
import shutil
from segmentation import get_yolov5, get_image_from_bytes
from starlette.responses import Response
import io
from PIL import Image as Img
import json
import schemas
from serializers.userSerializers import patientEntity
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Image
from fastapi.responses import FileResponse
import os

model = get_yolov5()
router = APIRouter()

@router.get("/patients")
def get_patients():
    patients = [patient for patient in patients_collection.find()]
    return patients

@router.post("/patients")
def add_patient(patient: Patient):
    result = patients_collection.insert_one(patient.dict())
    return {"patient_id": str(result.inserted_id)}

@router.get("/patients/{patient_id}")
def get_patient(patient_id: str):
    patient = patients_collection.find_one({"identification_number": patient_id})
    return patient

# @router.put("/patients/{patient_id}")
# def update_patient(patient_id: str, patient: Patient):
#     result = patients_collection.update_one(
#         {"identification_number": ObjectId(patient_id)},
#         {"$set": patient.dict()}
#     )
#     return {"patient_id": str(patient_id)}

@router.put("/patients/{patient_id}")
def update_patient(patient_id: str, comment: str=Body(...)):
    result = patients_collection.update_one(
        {"identification_number": patient_id},
        {"$set": {"comment": comment}}
    )
    return {"patient_id": str(patient_id)}

@router.delete("/patients/{patient_id}")
def delete_patient(patient_id: str):
    result = patients_collection.delete_one({"identification_number": patient_id})
    return {"patient_id": str(patient_id)}

# @router.put("/upload/{patient_id}")
# async def prediction(patient_id: str, patient: Patient, file: UploadFile=File(...)):
#     file_location = f"static/{file.filename}"
#     with open(file_location,'wb+') as file_object:
#         shutil.copyfileobj(file.file,file_object)
    
#     result = patients_collection.update_one({"identification_number": ObjectId(patient_id)},{"chest_xray": file_location}, {"$set": dict(patient)})
#     # return {"patient_id": str(patient_id)}
#     print(patient)


@router.put('/upload/{patient_id}')
async def update_file(patient_id: str, file: UploadFile = File(...)):
    global pdf_files
    # Save the file to disk
    file_location = f"static/{file.filename}"
    with open(file_location,'wb+') as file_object:
        shutil.copyfileobj(file.file,file_object)
    # Update the file location in MongoDB
    # file_location = f'./{file.filename}'
    patients_collection.update_one(
        {"identification_number": patient_id},
        {"$set": {"chest_xray": file_location}}
    )
    with open(file_location, "rb") as f:
        file_bytes = f.read()
    input_image = get_image_from_bytes(file_bytes)
    results = model(input_image)
    detect_res = results.pandas().xyxy[0].to_json(orient="records")
    detect_res = json.loads(detect_res)
    results.render()  # updates results.imgs with boxes and labels
    for img in results.ims:
        bytes_io = io.BytesIO()
        img_base64 = Img.fromarray(img)
        img_base64.save(bytes_io, format="jpeg")
    # return Response(content=bytes_io.getvalue(),media_type="image/jpeg")
    # return {"result": detect_res}
    # return {'file_location': file_location}

    ans=[]
    for i in detect_res:
      ans.append(i['name'])
    Diseases = (", ").join(ans)

    # Define report format
    patient_user = patients_collection.find_one({'identification_number': patient_id})
    user = patientEntity(patient_user)
    # pdf_name = f"static/pdf/{user['patient_name']}.pdf"
    pdf_name = user['report']
    # for i in range(len(pdf_name)):
    #     pdf_files.append(pdf_name[i])
    j = len(pdf_name)
    # pdf_name_new = ""
    # if pdf_name is not None:   
    pdf_name_new = f"static/pdf/{user['patient_name']}_{j}.pdf"
    pdf_name.append(pdf_name_new)
    doc = SimpleDocTemplate(pdf_name_new,pagesize=letter)
    elements = []

    # Add title
    title = Paragraph(f"{user['patient_name']} Report")
    elements.append(title)

    path1=f"static/annotated_imgs/{user['patient_name']}.jpg"
    im1=img_base64
    # Add image
    
    im1.save(path1)
    
    image = Image(path1, width=2*inch, height=2*inch)
    

    elements.append(image)

    # Add text
    text = (f"Name: {user['patient_name']}\n"
            f"Age: {user['age']}\n" 
            f"Gender: {user['gender']}\n" 
            f"Diseases Detected: {Diseases}")
    paragraph = Paragraph(text)
    elements.append(paragraph)

    # Generate PDF report and return it
    doc.build(elements)
    filename = f"http://127.0.0.1:8000/{pdf_name_new}"
    pdf = FileResponse(pdf_name_new, media_type="application/pdf", filename=filename)
    patients_collection.update_one(
        {"identification_number": patient_id},
        {"$set": {"report": pdf_name}}
    )
    patients_collection.update_one(
        {"identification_number": patient_id},
        {"$set":{"annotated_img" : f"http://127.0.0.1:8000/{path1}"}}
    )
    return filename

@router.get("/patients/patient_file/{patient_id}")
def get_patient(patient_id: str):
    # pdf = []
    patient = patients_collection.find_one({"identification_number": patient_id})
    user = patientEntity(patient)
    pdf_name = user['report']
    filename = pdf_name[-1]
    pdf_name_new = pdf_name[-1]
    pdf = (FileResponse(pdf_name_new, media_type="application/pdf", filename=filename))
    return pdf
    