def userEntity(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "role": user["role"],
        "identification_number": user["identification_number"],
        "verified": user["verified"],
        "password": user["password"],
        "created_at": user["created_at"],
        "updated_at": user["updated_at"]
    }


def userResponseEntity(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "role": user["role"],
        "identification_number": user["identification_number"],
        "created_at": user["created_at"],
        "updated_at": user["updated_at"]
    }


def embeddedUserResponse(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "identification_number": user["identification_number"]
    }


def userListEntity(users) -> list:
    return [userEntity(user) for user in users]

def patientEntity(patient) -> dict:
    return {
        "id": str(patient["_id"]),
        "identification_number": patient["identification_number"],
        "patient_name": patient["patient_name"],
        "age": patient["age"],
        "gender": patient["gender"],
        "address": patient["address"],
        "phone": patient["phone"],
        "doctor_name": patient["doctor_name"],
        "technician_name": patient["technician_name"],
        "chest_xray": patient["chest_xray"],
        "annotated_img": patient["annotated_img"],
        "report": patient["report"],
        "comment": patient["comment"]
    }