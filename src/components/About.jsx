import React from "react"
import full_new_logo from ".././images/full_new_logo.png"
import aboutImg from ".././images/laurenjetton-4.jpg"
import seriousImg from ".././images/laurenjetton-76.jpg"

export default function About() {
  return (
    <div className="h-[2400px] lg:h-[1200px] w-[100vw] lg:w-5/6 text-center lg:text-left flex flex-col lg:flex-row mx-auto">
      <div className="w-5/6 lg:w-1/2 flex flex-col lg:ml-36 mx-auto">
        <h1 className="text-[45px] lg:text-[35px] font-bold text-[#006a6c]">About Dr. Lauren Jetton</h1>
        <p className="mt-10 lg:mt-5 text-[24px] lg:text-[16px]">Dr. Jetton’s mission is to help restore and maintain her patients’ health to their fullest potential and optimal life expression through chiropractic care, addressing the nervous system, patient education and empowerment.  She employs a whole body approach and treats patients of all ages, focusing on families from prenatal to pediatric care.   Dr. Jetton was inspired by her own children and began a deeper pursuit of knowledge and skill in pediatric care when she became a mother in 2013.  This led to her opening her own practice, Loving Wellness Chiropractic, out of her home after the birth of her third baby at the end of 2017.  Since then she has enjoyed serving many families at her home office.  Prior to this she was an associate doctor at a wonderful sports medicine practice.</p>
        <p className="mt-10 lg:mt-5 text-[24px] lg:text-[16px]">Dr. Jetton specializes in pregnancy care and has been certified in the Webster Technique since 2010.  This technique restores proper pelvic balance and function for pregnant mothers.  She has extensive postdoctoral training in infant chiropractic care through the ICPA and specializes in optimizing and restoring function in infants with breastfeeding and bottle-feeding difficulties.  She is highly experienced and passionate about providing chiropractic care to women before, during and after birth and children of all ages, newborn and up!  She does this with gentle, loving, compassionate, comprehensive chiropractic techniques and therapies.</p>
        <p className="mt-10 lg:mt-5 text-[24px] lg:text-[16px]">Dr. Jetton graduated with her Doctorate in Chiropractic from National University of Health Sciences in 2009.  At graduation she received the Joseph Janse outstanding student award.  Dr. Jetton has a background in Sports Medicine and also has a degree in Athletic Training from UNC Wilmington.</p>
        <p className="mt-10 lg:mt-5 text-[24px] lg:text-[16px]">Dr. Jetton is a native Charlottean and grew up in Dilworth.   Dr. Jetton loves, loves, loves being a mama to her 3 amazing energetic kiddos, working out, reading, going to the beach and enjoying a path of mind body spirit healing and wellness for herself.   Her goal is to continually pursue education so that she can provide her family and patients with the care they seek for optimal wellness.</p>
        <img className="h-64 w-64 mx-auto mt-12" src={full_new_logo} />
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-row lg:flex-col mx-auto">
        <img className="h-[400px] w-[260px] lg:h-[500px] lg:w-[335px] rounded-xl mx-auto mr-16 lg:mx-auto" id="card-div-shadow" src={aboutImg} />
        <img className="h-[400px] w-[260px] lg:h-[500px] lg:w-[335px] rounded-xl mx-auto lg:mt-10" id="card-div-shadow" src={seriousImg} />
      </div>
    </div>
  )
}