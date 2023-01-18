import React from "react"
import infant from ".././images/laurenjetton-162.jpg"
import pediatric from ".././images/laurenjetton-120.jpg"
import pregnancy from ".././images/DSC_0702.jpg"
import webster from ".././images/DSC_0581 copy.jpg"
import irt from ".././images/laurenjetton-112.jpg"
import muscle from ".././images/laurenjetton-153.jpg"
import websterpdf from ".././pdfs/webster_technique article.pdf"
import emotionalpdf from ".././pdfs/emotional_integration.pdf"
import nervespdf from ".././pdfs/nerves.pdf"
import pelvic_floorpdf from ".././pdfs/pelvic_floor.pdf"

export default function Services() {
  return (
    <div className="h-[3700px] w-[100vw] lg:w-5/6 flex flex-col mx-auto" >
      <div className="flex flex-row w-[90%] lg:w-5/6 mx-auto">
        <div className="flex flex-col w-1/2 justify-center mx-auto">
          <h1 className="mx-auto text-[#006a6c] font-bold text-[25px]">Infant Care</h1>
          <p className="mt-4 text-center text-[18px]">A baby’s skeletal system is a delicate balance of movement and life events from the position in the uterus to the birth process can interfere with these movements leading to restrictions in the spine and tension in the muscles and fascia.  Dr. Jetton specializes in clearing the baby’s body of these interferences through gentle chiropractic adjustments and soft tissue techniques to improve the brain and body’s connection.  This can improve breastfeeding and bottle feeding challenges, latch, the digestive system, colic, tension in the infant, arching, fussiness, diarrhea/constipation, torticollis, craniofacial asymmetries, and sleep all leading to a generally happier baby and happier mama.</p>
        </div>
        <div className="w-1/2 mx-auto flex justify-center mt-12 lg:mt-0">
          <img className="w-[300px] h-[450px] rounded-xl" src={infant} id="card-div-shadow"/>
        </div>
      </div>
      <div className="flex flex-row w-5/6 mx-auto mt-36">
        <div className="w-1/2 mx-auto flex justify-center mt-12 lg:mt-0">
          <img className="w-[300px] h-[450px] rounded-xl" src={pregnancy} id="card-div-shadow"/>
        </div>
        <div className="flex flex-col w-1/2 justify-center mx-auto">
          <h1 className="mx-auto text-[#006a6c] font-bold text-[25px]">Pregnancy Care</h1>
          <p className="mt-4 text-center text-[18px]">Chiropractic care is an essential part of prenatal and postnatal care.  Dr. Jetton uses techniques, including Webster Technique, to ensure proper spinal alignment to reduce overall stress in the body that contribute to discomfort during pregnancy.  This also increases optimal positioning of the baby due to reduced tension in the pelvis.   Chiropractic care during pregnancy also improves birth outcomes by supporting a woman’s body's natural function to achieve a safer, faster and more comfortable birth.</p>
        </div>
      </div>
      <div className="flex flex-row w-5/6 mx-auto mt-36">
        <div className="flex flex-col w-1/2 justify-center mx-auto mr-10 lg:mr-0">
          <h1 className="mx-auto text-[#006a6c] font-bold text-[25px]">Pediatric Care</h1>
          <p className="mt-4 text-center text-[18px]">Children who receive chiropractic care tend to experience more ease with growth and development, rebound more quickly and easily from physical emotional or behavioral challenges, heal more quickly, and improve overall well being.  Dr. Jetton offers gentle, specific chiropractic adjustment to children of all ages.  Her favorite is when a child learns when their body needs an adjustment and asks to go see Dr. Jetton.</p>
        </div>
        <div className="w-1/2 mx-auto flex justify-center mt-12 lg:mt-0">
          <img className="h-[250px] w-[375px] lg:h-[300px] lg:w-[400px]x rounded-xl" src={pediatric} id="card-div-shadow"/>
        </div>
      </div>
      <div className="flex flex-row w-5/6 mx-auto mt-36">
        <div className="w-1/2 mx-auto flex justify-center mt-12 lg:mt-0">
          <img className="w-[300px] h-[450px] rounded-xl" src={webster} id="card-div-shadow"/>
        </div>
        <div className="flex flex-col w-1/2 justify-center mx-auto">
          <h1 className="mx-auto text-[#006a6c] font-bold text-[25px]">Webster Technique</h1>
          <p className="mt-4 text-center text-[18px]">This is a specific chiropractic analysis and diversified adjustment with the goal to reduce SI joint dysfunction to facilitate neuro-biomechanical function in the pelvis.  This is a way to support a more comfortable, safer, easier birth.  Dr. Jetton has been certified and using this technique with her pregnant patients since 2010.</p>
        </div>
      </div>
      <div className="flex flex-row w-5/6 mx-auto mt-36">
        <div className="flex flex-col w-1/2 justify-center mx-auto">
          <h1 className="mx-auto text-[#006a6c] font-bold text-[25px]">Injury Recall Technique (IRT)</h1>
          <p className="mt-4 text-center text-[18px]">IRT is a technique used to erase the neurological memory of past injuries which often interfere with normal healing and function.  Dr. Jetton uses this technique with all ages including babies who have had a lip and/or tongue tie release.</p>
        </div>
        <div className="w-1/2 mx-auto flex justify-center mt-12 lg:mt-0">
          <img className="w-[300px] h-[450px] rounded-xl" src={irt} id="card-div-shadow"/>
        </div>
      </div>
      <div className="flex flex-row w-5/6 mx-auto mt-36 justify-between">
        <div className="w-1/2 mx-auto flex justify-center mr-5 lg:mr-0 mt-12 lg:mt-0">
          <img className="h-[250px] w-[375px] lg:h-[300px] lg:w-[400px] rounded-xl" src={muscle} id="card-div-shadow"/>
        </div>
        <div className="flex flex-col w-1/2 justify-center mx-auto">
          <h1 className="mx-auto text-[#006a6c] text-center font-bold text-[25px]">Muscle Testing for Food Sensitivities</h1>
          <p className="mt-4 text-center text-[18px]">This is a non-invasive in office technique Dr. Jetton uses to determine which most common food allergens a patient is sensitive to.  Determining this will help lower inflammation in the body, decrease digestive distress, improve bowel function, reduce eczema and diaper rash in infants and improve symptoms of colic and overall well being.</p>
        </div>
      </div>
      <div className="flex flex-col mx-auto mt-24">
        <h1 className="text-[#006a6c] font-bold text-[25px] mx-auto">For More Information</h1>
        <a className="mx-auto mt-4 text-blue-600 hover:text-blue-800 underline" href={websterpdf} target="_blank">Webster Technique PDF</a>
        <a className="mx-auto mt-1 text-blue-600 hover:text-blue-800 underline" href="https://icpa4kids.com/training/webster-certification/webster-technique/" target="_blank">Webster Technique Article</a>
        <a className="mx-auto mt-1 text-blue-600 hover:text-blue-800 underline" href={emotionalpdf} target="_blank">Emotional Integration</a>
        <a className="mx-auto mt-1 text-blue-600 hover:text-blue-800 underline" href={nervespdf} target="_blank">"That's Getting on my Nerves"</a>
        <a className="mx-auto mt-1 text-blue-600 hover:text-blue-800 underline" href={pelvic_floorpdf} target="_blank">Five Things I Wish I Knew About My Pelvic Floor</a>
      </div>
    </div>
  )
}