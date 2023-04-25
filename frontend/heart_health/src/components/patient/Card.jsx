import React, { useState, useEffect } from "react";
import HeroImage from "../../assets/Cardiologist-pana.svg"
import axios from "axios";
import { Link } from "react-router-dom";

const Card = () => {
  const [patient, Setpatient] = useState([]);
  const [id,setid] = useState(localStorage.getItem("identification_number") || "[]")
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://127.0.0.1:8000/api/patient/patients/${id}`).then(
    (response)=>{
      Setpatient(response.data);      
      console.log(response.data)
      setLoading(false)
    }
    )
  },[])

  return (
    <>
    <div className='flex justify-around'>
    {loading===false ? 
    <>
    <div>
    <img src={patient['annotated_img']} className="hidden pl-32 h-96 lg:mt-0 lg:col-span-5 lg:flex" alt='Hero'/>
    </div>
    <div className="pt-12">
    <Link to="#" class="flex flex-col items-center p-10 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
    {/* <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src=""/> */}
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Your Results</h5>
        {/* <div>Name : {patient['patient_name']}</div> */}
        {/* <p class="mb-3 font-normal text-gray-700">Name : {patient['patient_name']}</p>
        <p class="mb-3 font-normal text-gray-700">Attended By : {patient['doctor_name']}</p>
        <p class="mb-3 font-normal text-gray-700">Diagnosis : Other Lesions</p>
        <p class="mb-3 font-normal text-gray-700">Comments by Doctor : {patient['comment']}</p> */}
        <p class="mb-3 font-normal text-gray-700">Name : Yadnesh Charekar</p>
        <p class="mb-3 font-normal text-gray-700">Attended By : Rutvij</p>
        <p class="mb-3 font-normal text-gray-700">Diagnosis : Other Lesions</p>
        <p class="mb-3 font-normal text-gray-700">Comments by Doctor : Please visit the clinic</p>
    </div>
    </Link>
    </div>
    </>
     : <></>}
  
</div>

    </>
  );
}

export default Card