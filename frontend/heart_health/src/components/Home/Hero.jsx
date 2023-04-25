import React from "react";
import HeroImage from "../../assets/Radiography-rafiki.svg"
import { Link } from "react-router-dom";

const Hero = () => {
    return (
  <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className='mr-auto place-self-center lg:col-span-7'>
      <h1 className="text-4xl font-bold pb-10">Guard your heart very jealously!</h1>
      <p className="pb-10 text-2xl">We offer you top qulity  cardiomegaly detection , education and recommendations from our qualified Doctors with years and years of experience.</p>
      <Link to="/SignUp"><button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md">Get started</button></Link>
    </div>
    <img src={HeroImage} className="hidden pl-32 h-96 lg:mt-0 lg:col-span-5 lg:flex" alt='Hero'/>
</div>
    )
};

export default Hero;
