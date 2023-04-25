import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [role,setRole] = useState(localStorage.getItem("role"))
    const [login,logout] = useState(localStorage.getItem("user"))
    function logout1() {
        localStorage.clear();
        logout(null);
    }
    return (
        <div>
            <div>
                <div className="relative border-2">
                    {/* For large screens */}
                    <div className="bg-gray-50 px-6 py-9">
                        <div className="container mx-auto flex items-center justify-between">
                           <h1 className="md:w-2/12 cursor-pointer text-gray-800 text-2xl font-semibold" aria-label="Heart Health"><Link to="/"> Heart Health </Link></h1>
                            <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                                <li>
                                    <Link to="/" className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/About" className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">
                                        About Us
                                    </Link>
                                </li>
                                {role==="technician" && login ? <li>
                                    <Link to="/Predict" className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">
                                        Predict
                                    </Link>
                                </li>:<></>}
                                {role==="doctor" && login ? <li>
                                    <Link to="/Results" className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">
                                        Results
                                    </Link> 
                                </li>:<></>}
                                {role==="patient" && login ? <li>
                                    <Link to="/YourResults" className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">
                                        Your Report
                                    </Link> 
                                </li>:<></>}
                            </ul>
                            <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                            {login ? <Link to="/"><button onClick={logout1} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg">Logout</button></Link>:<Link to="/Login"><button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg">Login</button></Link>}
                            {role==="doctor" && login ? <p>Hello, Doctor!</p>:<></>}
                            {role==="technician" && login ? <p>Hello, Technician!</p>:<></>}
                            {role==="patient" && login ? <p>Hello, Patient!</p>:<></>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
