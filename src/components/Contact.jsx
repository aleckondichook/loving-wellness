import React, { useState } from "react"
import axios from "axios"
import contactImg from ".././images/laurenjetton-40.jpg"

export default function Contact() {
    
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formPhone, setFormPhone] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formError, setFormError] = useState(false)
  const [postSuccess, setPostSuccess] = useState(false)
  const [postFail, setPostFail] = useState(false)

  async function sendEmail(e) {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage || !formPhone) {
      setFormError(true);
    }
    else {
      setFormError(false);
      const emailObject = {
        'from_name': formName,
        'reply_email': formEmail,
        'phone_number': formPhone,
        'message': formMessage
      }
      const res = await axios.post('/minecraftspeedrun/email', emailObject)
      if(res.data == "success") {
        setPostSuccess(true)
      }
      else if(res.data == "error") {
        setPostFail(true)
      }
      setFormName('')
      setFormEmail('')
      setFormPhone('')
      setFormMessage('')
    }  
  }

  return (
    <div className="h-[800px] mb-36 flex flex-row w-[100vw] lg:w-5/6 justify-center mt-16 mx-auto">  
      <div className="flex flex-col w-[50%]">
        <img className="w-[300px] h-[450px] lg:w-[450px] lg:h-[675px] mx-auto rounded-xl mt-36 lg:mt-0" id="card-div-shadow" src={contactImg} />
      </div>
      <form className="mx-auto w-[50%] flex flex-col mt-6" onSubmit={sendEmail}>
        <h1 className="text-[35px] font-bold text-[#006a6c]">Contact</h1>
        <p className="mt-2 w-[100%] lg:p-0 pr-8 lg:w-[85%]">Dr. Jetton accepts new patients from direct referrals.  After you have been referred, please text to schedule an appointment. For any questions, please use this form.</p>
        <input className="rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-[90%] lg:w-5/6" type="text" value={formName} placeholder="Name" onChange={(e) => setFormName(e.target.value)}/>
        <input className="rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-[90%] lg:w-5/6" type="text" value={formEmail} placeholder="Email" onChange={(e) => setFormEmail(e.target.value)}/>
        <input className="rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-[90%] lg:w-5/6" type="text" value={formPhone} placeholder="Phone Number" onChange={(e) => setFormPhone(e.target.value)}/>
        <textarea className="rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-[90%] lg:w-5/6 h-48" id="message-box" value={formMessage} placeholder="Message" onChange={(e) => setFormMessage(e.target.value)}/>
        <button className={`rounded-xl px-3 ${formError ? "bg-red-500" : "bg-slate-200"} hover:bg-slate-400 mt-5 w-1/4 h-14 lg:h-10`}>Send Email</button>
        {formError && <div className="text-red-500 mt-5">please enter all information</div>}
        {postSuccess && <div className="text-green-500 mt-5">email sent</div>}
        {postFail && <div className="text-red-500 mt-5">error sending email</div>}
      </form>
    </div>
  )
}