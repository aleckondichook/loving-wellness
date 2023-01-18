import React, { useState, useEffect, useContext } from "react"
import { useSwipeable } from "react-swipeable"
import { DesktopContext } from "../context/DesktopContext"

export default function Testimonials() {

  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [testimonials, setTestimonials] = useState([
    {
      name: "Linda Huddleston RN, IBCLC",
      message: "Dr. Lauren Jetton is truly amazing and gifted in her collaborative care of families. She is experienced and compassionate with a gentle, calming and confident presence.  Dr. Jetton’s trauma informed, holistic approach, provides a foundation for excellence in achieving and maintaining optimal wellness. Dr. Jetton is specifically skilled and experienced in supporting infants with breast and bottle feeding challenges due to tongue, lip, buccal and other soft tissue restrictions. She has advanced clinical training in the comprehensive and collaborative treatment of infants with tongue ties. With her deep understanding of the biomechanics and physiology of infant feeding, she has been significant in helping to achieve functionality and competency in these dyads."
    },
    {
      name: "Erika Shepard RN, MSN",
      message: "I’ve seen Dr. Lauren for chiropractic care for over a year now. I had no injuries… I just wanted to do it for prevention after a lifetime of sitting at a computer, sports, and activity. Dr. Lauren’s attention to detail and expertise is obvious, but what makes going to her special is her attention to you as a whole person. Dr. Lauren is a different kind of chiropractor that really listens to you and your body in a way that’s very nurturing, warm, and caring. It’s not simply an adjustment… It's a healing experience. If you’re looking for that, I highly recommend Dr. Lauren."
    },
    {
      name: "Jennifer Moss Corbin, IBCLC, BS",
      message: "As an International Board Certified Lactation Consultant, I have referred to Dr. Lauren for the past ten years. Her knowledge, skills and intuition when working with families and babies are unprecedented. She has cared for complex cases with skill and compassion as families work towards their optimal feeding goals. I am so grateful for her work and care in our community."
    },
    {
      name: "Julia",
      message: "Dr. Lauren took excellent care of both me and my baby throughout my pregnancy and after he arrived. Each visit during pregnancy she listened to my concerns and goals and helped me feel as comfortable and aligned as possible. I am confident that her skilled hands helped lead to a smooth and pleasant birth! She was so gentle with my baby once he arrived and was able to quickly and effectively help address some tightness that was making it difficult for him to nurse on one side. We love seeing Dr. Lauren and always walk away feeling great!"
    },
    {
      name: "Courtney",
      message: "I first sought Dr. Lauren’s services when I was pregnant with twins. I had terrible pain in my hips and back, and Dr. Lauren made a huge impact in lessening my discomfort. She spent considerable time adjusting me, always making me feel comfortable and cared for. Her calm and confidant demeanor and skilled hands made what was a difficult pregnancy bearable, and I credit her with being the one who prepared my body for an easy delivery. I’ve continued to enlist her services not only for myself, but also for my family since. She’s hands down the best chiropractor I have experienced - her adjustments really are magic!"
    }
  ])

  const isDesktop = useContext(DesktopContext)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  }), []

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    }
    else if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }

  return (
    <div className="h-[710px] lg:h-[670px] overflow-hidden" id="testimonials-div" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} {...handlers}>
      <h1 className="text-white font-bold flex justify-center mt-10 text-[40px] lg:text-[60px] mb-10 lg:mb-0">WHAT DR JETTON'S PATIENTS SAY</h1>
      <div className="" id="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        <div className="flex flex-col justify-center mx-auto my-4 h-[275px] px-48 text-xl w-[100%]" id="carousel-item">
          <p className="mx-auto text-center mb-5 whitespace-normal">{testimonials[0].message}</p>
          <h1 className="mx-auto">- {testimonials[0].name}</h1>
        </div>
        <div className="flex flex-col justify-center mx-auto my-4 h-[275px] px-48 text-xl w-[100%]" id="carousel-item">
          <p className="mx-auto text-center mb-5 whitespace-normal">{testimonials[1].message}</p>
          <h1 className="mx-auto">- {testimonials[1].name}</h1>
        </div>
        <div className="flex flex-col justify-center mx-auto my-4 h-[275px] px-48 text-xl w-[100%]" id="carousel-item">
          <p className="mx-auto text-center mb-5 whitespace-normal">{testimonials[2].message}</p>
          <h1 className="mx-auto">- {testimonials[2].name}</h1>
        </div>
        <div className="flex flex-col justify-center mx-auto my-4 h-[275px] px-48 text-xl w-[100%]" id="carousel-item">
          <p className="mx-auto text-center mb-5 whitespace-normal">{testimonials[3].message}</p>
          <h1 className="mx-auto">- {testimonials[3].name}</h1>
        </div>
        <div className="flex flex-col justify-center mx-auto my-4 h-[275px] px-48 text-xl w-[100%]" id="carousel-item">
          <p className="mx-auto text-center mb-5 whitespace-normal">{testimonials[4].message}</p>
          <h1 className="mx-auto">- {testimonials[4].name}</h1>
        </div>
      </div>
      {isDesktop && <div className="flex flex-row items-center justify-center mx-auto mt-36">
        <button className={`rounded-xl px-4 pb-1 mr-24 bg-white hover:bg-slate-400`} onClick={() => updateIndex(activeIndex - 1)}> &larr; </button>
        <button className={`rounded-xl px-4 pb-1 bg-white hover:bg-slate-400`} onClick={() => updateIndex(activeIndex + 1)}> &rarr; </button>
      </div>}
    </div>
  )
}