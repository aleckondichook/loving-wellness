import React, { createContext, useState, useEffect } from "react"

const DesktopContext = createContext()

const DesktopContextProvider = ({ children }) => {

  const [isDesktop, setIsDesktop] = useState(true)
  
  useEffect(() => {
    updateDimensions()
    
    window.addEventListener("resize", updateDimensions)
  
    return () => window.removeEventListener("resize", updateDimensions)
    
  }, [])
  
  function updateDimensions() {
    if(window.innerWidth > 1024) {
      setIsDesktop(true)
    }
    else {
      setIsDesktop(false)
    }
  }

  return (
    <DesktopContext.Provider value={isDesktop}>
      {children}
    </DesktopContext.Provider>
  )

}

export { DesktopContext, DesktopContextProvider }