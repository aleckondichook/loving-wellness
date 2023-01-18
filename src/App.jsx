import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import "./index.css"
import { DesktopContextProvider } from "./context/DesktopContext"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {

  return (
    <Router>
      <DesktopContextProvider>
        <div className="flex flex-col relative min-w-screen min-h-screen m-0 p-0 overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </DesktopContextProvider>
    </Router>
  )
}