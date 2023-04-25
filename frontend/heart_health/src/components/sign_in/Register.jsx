import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
// import { Dropdown } from "flowbite-react";
// import BackImage from "../Images/result.svg";

export default function SignUp() {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [phone_no, Setphone_no] = useState(0);
  const [role, Setrole] = useState("");
  const [identification_number, Setindentification_number] = useState("");
  const [password, Setpassword] = useState("");
  const [passwordConfirm, SetpasswordConfirm] = useState("");
  const [created_at, Setcreated_at] = useState("");
  const [updated_at, Setupdated_at] = useState("");
  const [verified, Setverified] = useState(false);


  const navigate = useNavigate();

  const handlesubmit = (e)=>{
    e.preventDefault()
    const phnumber_pre="+91 "
    const datasent={
        "name":name,
        "email":email,
        "phone_no":phnumber_pre.concat(phone_no),
        "role":role,
        "identification_number":identification_number,
        "password": password,
        "created_at": "2023-02-16T15:20:41.610Z",
        "updated_at": "2023-02-16T15:20:41.610Z",
        "passwordConfirm": passwordConfirm,
        "verified": true
    }
    axios.post('http://127.0.0.1:8000/api/auth/register',datasent,{
      name,email,phone_no,role,identification_number,password,created_at, updated_at, passwordConfirm, verified
    }).then(
      (response)=>{
        if(response.status==="success"){
          navigate("/Login");
      }
    }
    )
  }
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        // src={BackImage}
        alt="/"
      />
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8 rounded-xl drop-shadow-xl">
          <h2 className="text-3xl font-bold text-center py-4">Login</h2>
          <div className="flex flex-col mb-4">
            <label>Name</label>
            <input
              className="border relative rounded-lg drop-shadow bg-gray-100 p-2"
              type="text"
              value={name}
              onChange={(e) => Setname(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              className="border relative rounded-lg drop-shadow bg-gray-100 p-2"
              type="text"
              value={email}
              onChange={(e) => Setemail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Phone Number</label>
            <input
              className="border relative rounded-lg drop-shadow bg-gray-100 p-2"
              type="text"
              value={phone_no}
              onChange={(e) => Setphone_no(e.target.value)}
            />
          </div>
          {/* <div className="flex flex-col mb-4">
            <label>User Role</label>
            <option onClick={Setrole("doctor")}>Doctor</option>
            <option onClick={Setrole("technician")}>Doctor</option>
            <option onClick={Setrole("patient")}>Doctor</option>
          </div> */}
          <div className="flex flex-col mb-4">
            <label>Role</label>
            <input
              className="border relative rounded-lg drop-shadow bg-gray-100 p-2"
              type="text"
              value={role}
              onChange={(e) => Setrole(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Identification Number</label>
            <input
              className="border relative rounded-lg drop-shadow bg-gray-100 p-2"
              type="text"
              value={identification_number}
              onChange={(e) => Setindentification_number(e.target.value)}
            />
          </div>
          <div className="flex flex-col ">
            <label>Password</label>
            <input
              className="border relative rounded-lg drop-shadow bg-gray-100 p-2"
              type="password"
              value={password}
              onChange={(e) => Setpassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col ">
            <label>Confirm Password</label>
            <input
              className="border relative rounded-lg drop-shadow bg-gray-100 p-2"
              type="password"
              value={passwordConfirm}
              onChange={(e) => SetpasswordConfirm(e.target.value)}
            />
          </div>
          <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative rounded-xl text-white" onClick={handlesubmit}>
            Sign Up
          </button>
          <p className="text-center mt-8">Already a member? <Link to="/Login">Login now</Link></p>
        </form>
      </div>
    </div>
  );
  }