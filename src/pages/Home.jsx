import { React, useState, useEffect } from "react"
import About from ".././components/About.jsx"
import Landing from ".././components/Landing.jsx"
import Services from ".././components/Services.jsx"
import Testimonials from "../components/Testimonials.jsx"
import Contact from "../components/Contact.jsx"

export default function Home() {

  return (
    <div className="" id="top-section">
      <Landing />
      <div className="mb-36" id="about-section"></div>
      <About />
      <div className="mb-36" id="services-section"></div>
      <Services />
      <div className="mb-36" id="testimonials-section"></div>
      <Testimonials />
      <div className="mb-36" id="contact-section"></div>
      <Contact />
    </div>
  )
}