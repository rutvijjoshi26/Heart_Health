import React from 'react';
import './App.css';
import Login from './components/sign_in/Login';
import SignUp from './components/sign_in/Register';
import {BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './components/Home/Home';
import Results from './components/results/Results';
import Predict from './components/technician/Predict';
import YourResults from './components/patient/YourResults';
import AboutUs from './components/aboutUs/AboutUs';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/YourResults" element={<YourResults />} />
        <Route path="/Predict" element={<Predict />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
