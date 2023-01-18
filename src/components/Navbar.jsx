import React, { useState, useContext } from "react"
import new_logo from ".././images/new_logo.png"
import Hamburger from "../components/Hamburger.jsx"
import { DesktopContext } from "../context/DesktopContext"

export default function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const isDesktop = useContext(DesktopContext)

  function handleToggle() {
    setNavbarOpen(prev => !prev)
  }

  return (
    <nav className="top-0 z-50 h-18 flex justify-center sticky">
      <div className="flex w-5/6 items-center mt-2 mx-auto justify-between fixed py-2 border-b-2 border-slate-300">
        <a className="flex center-items" href="#top-section">
          <img className="h-24 lg:h-14 mr-4 hover:opacity-50" src={new_logo}/>
          {isDesktop && <p className="self-center whitespace-nowrap text-[40px] lg:text-[30px] pl-2 w-72 text-[#006a6c] hover:text-[#d2e7e0] font-bodoni">Loving Wellness Chiropractic</p>}
        </a>
        {
          isDesktop && <ul className="flex space-x-8 w-3/4 justify-end">
            <li>
              <a className="text-[#006a6c] hover:text-[#d2e7e0] font-bold text-[20px]" href="#about-section">About</a>
            </li>
            <li>
              <a className="text-[#006a6c] hover:text-[#d2e7e0] font-bold text-[20px]" href="#services-section">Services</a>
            </li>
            <li>
              <a className="text-[#006a6c] hover:text-[#d2e7e0] font-bold text-[20px]" href="#testimonials-section">Testimonials</a>
            </li>
            <li>
              <a className="text-[#006a6c] hover:text-[#d2e7e0] font-bold text-[20px]" href="#contact-section">Contact</a>
            </li>
          </ul>
        }
        {
          !isDesktop && <a href="#top-section"><div onClick={handleToggle}>
            <Hamburger navbarOpen={navbarOpen}/>
          </div></a>
        }
      </div>
      {
        navbarOpen && 
        <div className="h-[50vh] w-[100vh] bg-slate-200 mt-[200px] absolute flex flex-col justify-around rounded-2xl opacity-90">
          <a className="mx-auto" onClick={handleToggle} href="#about-section"><h1 className="text-black font-bold text-[40px] hover:text-slate-400">About</h1></a>
          <a className="mx-auto" onClick={handleToggle} href="#services-section"><h1 className="text-black font-bold text-[40px] hover:text-slate-400">Services</h1></a>
          <a className="mx-auto" onClick={handleToggle} href="#testimonials-section"><h1 className="text-black font-bold text-[40px] hover:text-slate-400">Testimonials</h1></a>
          <a className="mx-auto" onClick={handleToggle} href="#contact-section"><h1 className="text-black font-bold text-[40px] hover:text-slate-400">Contact</h1></a>
        </div>
      }
    </nav> 
  )
}