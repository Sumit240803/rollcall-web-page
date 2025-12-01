"use client"
import Image from 'next/image'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
const Hero = () => {
  const [email, setEmail] = React.useState("")
  const [college, setCollege] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const handleSubmit = async ()=>{
    setLoading(true)
    const data = {email, college}
    const response = await fetch("https://rollcall-backend.vercel.app/api/v1/query/query",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if(response.ok){
      toast("Submitted successfully!")
      setEmail("")
      setCollege("")
      setLoading(false)
    }
  }
  return (
    <div>
      <ToastContainer/>

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row justify-between p-8 md:p-24 items-center gap-12">

        {/* LEFT TEXT */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <div className="font-dela-gothic text-2xl md:text-3xl">
            Why do timetables need to be so boring?
          </div>
          <div className="font-metropolis text-xl md:text-2xl tracking-wide mt-2">
            a social calendar for your college
          </div>
        </div>

        {/* IMAGE + PURPLE GLOW */}
        <div className="relative flex items-center justify-center">
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[180px] md:w-[250px] h-[180px] md:h-[250px] bg-[#a200ff] rounded-full blur-[90px] md:blur-[120px] opacity-60"></div>
          </div>

          <Image
            src="/phone.png"
            width={300}
            height={600}
            alt="Phone"
            className="h-[350px] md:h-[480px] w-auto object-contain relative"
          />
        </div>

      </div>

      {/* MIDDLE SECTION */}
      <div className="flex flex-col items-center gap-8 md:gap-12 px-4">
        <div className="m-auto w-full md:w-1/3">
          <div className="text-center font-dela-gothic text-2xl md:text-4xl">
            Built for the chaos of college life.
          </div>
        </div>

        {/* CROPPED IMAGE - RESPONSIVE */}
        <div className="h-[250px] md:h-[400px] overflow-hidden w-full flex justify-center relative">
          <Image
            src="/phone-groups-1.png"
            width={600}
            height={400}
            alt=""
            className=" hidden md:block h-[400px] w-auto  object-cover"
          />
          <Image
    src="/phone-groups-for-mobile.png"
    width={300}
    height={600}
    alt="Phone Mobile"
    className="block md:hidden h-[350px] w-auto object-contain"
  />
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="flex flex-col justify-center items-center mt-32 mb-32 px-6">
        <div className="text-3xl md:text-4xl font-dela-gothic">
          Want Rollcall in your college?
        </div>
        <div className="font-metropolis font-thin mt-5 text-center">
          Add your email and college name.
        </div>
        <div className="font-metropolis font-thin text-center">
          We’ll reach out if you want us to launch there.
        </div>

        <div className="flex flex-col mt-10 gap-4 w-full max-w-sm">
          <input 
            className="p-4 text-white bg-[#FFFFFF]/10 rounded-lg font-metropolis font-normal outline-none" 
            placeholder="college" 
            type="text" 
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
          <input 
            className="p-4 text-white bg-[#FFFFFF]/10 rounded-lg font-metropolis font-normal outline-none" 
            placeholder="email" 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            className="mt-4 p-4 rounded-lg bg-[#F43F5E] text-white font-metropolis font-bold cursor-pointer"
            onClick={handleSubmit}
          >
           {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>

    </div>
  )
}

export default Hero
