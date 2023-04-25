import React from 'react'
import Footer from '../helpers/Footer'
import Navbar from '../helpers/Navbar'
import Img from '../../assets/Radiography-amico.svg'
import Img1 from "../../assets/Online Doctor-rafiki.svg"
import { Link } from 'react-router-dom'
import Faq from './Faq'
import Gallery from './Gallery'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <h1 className="text-center text-[40px] pt-10 font-bold">About Us</h1>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
    <div className='mr-auto place-self-center lg:col-span-7'>
      <h1 className="text-3xl pb-10 font-semibold">Who are We</h1>
      <p className="pb-10 text-xl">We offer you top qulity  cardiomegaly detection , education and recommendations from our qualified Doctors with years and years of experience.</p>
    </div>
    <img src={Img} className="hidden pl-32 h-80 lg:mt-0 lg:col-span-5 lg:flex" alt='Hero'/>
</div>
<Faq/>
<Gallery/>
<Footer/>
    </>
  )
}

export default AboutUs