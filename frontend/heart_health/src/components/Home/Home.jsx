import React from 'react'
import Footer from '../helpers/Footer'
import Navbar from '../helpers/Navbar'
import { Email } from './Email'
import Hero from './Hero'
import LogoCloud from './LogoCloud'
import { Stats } from './Stats'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <LogoCloud></LogoCloud>
    <Stats></Stats>
    <Email></Email>
    <Footer></Footer>
    </>
  )
}

export default Home