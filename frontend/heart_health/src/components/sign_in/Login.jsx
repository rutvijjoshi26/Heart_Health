import React from 'react'
import {useState} from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode";
import BackImage from "../../assets/endless-constellation.svg"


export default function Login() {
  const [email,Setemail] = useState("");
  const [password,Setpassword] = useState("");
  const [value, setValue] = useState("doctor");

  const handleChange = (event) => {

    setValue(event.target.value);
 
  };
 
 

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault()
    const datasent={"email":email,"password":password}
    axios.post('http://127.0.0.1:8000/api/auth/login',datasent,{
      email,password,
    }).then(
      (response)=>{
        if(response.data.access_token){
          var decoded = jwt_decode(response.data.access_token);
          localStorage.setItem("user", JSON.stringify(response.data.access_token));
          localStorage.setItem("role", decoded["role"]);
          localStorage.setItem("identification_number", decoded["identification_number"]);
          navigate("/");
      }
        else return response.status
      }
    )
    .catch((error)=>{
      alert(error.response['data']['detail'][0]['msg'])
      console.log(error.response['data']['detail'][0]['msg'])
    })
     }


  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img src={BackImage} className='absolute w-full h-full object-cover mix-blend-overlay' alt="/" />
    

    <div className='flex justify-center items-center h-full'>

        <form className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-xl drop-shadow-xl'>
   <div className='flex justify-center'>
  <select value={value} onChange={handleChange}>
    <option value="doctor">Doctor</option>

    <option value="technician">Technician</option>

    <option value="patient">Patient</option>
  </select>

</div>
        {value==="doctor" ?
          <>
          <h2 className='text-3xl font-bold text-center py-4'>Doctor's Login</h2>
         <div className='flex flex-col mb-4'>
               <label>Email</label>
               <input className='border relative rounded-lg drop-shadow bg-gray-100 p-2' type="text" value={email} onChange={(e)=>(Setemail(e.target.value))}/>
           </div>
           <div className='flex flex-col '>
               <label>Password</label>
               <input className='border relative rounded-lg drop-shadow bg-gray-100 p-2' type="password" value={password} onChange={(e)=>(Setpassword(e.target.value))} />
           </div>
           <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative rounded-xl text-white' onClick={handleSubmit}>Sign In</button>
           </>
          :<></>}
        {value==="technician" ?

          <>
           <h2 className='text-3xl font-bold text-center py-4'>Technician's Login</h2>
          <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input className='border relative rounded-lg drop-shadow bg-gray-100 p-2' type="text" value={email} onChange={(e)=>(Setemail(e.target.value))}/>
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative rounded-lg drop-shadow bg-gray-100 p-2' type="password" value={password} onChange={(e)=>(Setpassword(e.target.value))} />
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative rounded-xl text-white' onClick={handleSubmit}>Sign In</button>
            </>
          :<></>}
        {value==="patient" ?
        <>
          <h2 className='text-3xl font-bold text-center py-4'>Patient's Login</h2>
          <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input className='border relative rounded-lg drop-shadow bg-gray-100 p-2' type="text" value={email} onChange={(e)=>(Setemail(e.target.value))}/>
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative rounded-lg drop-shadow bg-gray-100 p-2' type="password" value={password} onChange={(e)=>(Setpassword(e.target.value))} />
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative rounded-xl text-white' onClick={handleSubmit}>Sign In</button>
            </>
          :<></>}
            
            {/* <Link to="/signup">
            <p className='text-center mt-8'>Not a member? Sign up now</p>
            </Link> */}
            
        </form>
    </div>
    </div>
  )
}