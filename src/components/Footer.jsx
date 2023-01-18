import React from "react"
import new_logo from ".././images/new_logo.png"

export default function Footer() {
  return (
    <footer className="bg-slate-200 bottom-0 w-screen">
      <div className="flex flex-row mx-auto justify-start items-center py-56 lg:py-24">
        <div className="flex flex-col w-[100%] items-center mx-auto">
          <h4 className="text-[50px] font-bodoni text-[#006a6c]">Loving Wellness Chiropractic</h4>
          <h5 className="mt-6 text-2xl font-bodoni text-[#006a6c]">Charlotte, NC</h5>
          <h5 className="font-bodoni text-[#006a6c]">Located in the Chantilly neighborhood between Elizabeth and Plaza Midwood</h5>
          <img className="h-48 w-48 mt-4" src={new_logo} />
        </div>
      </div>
    </footer>
  )
}