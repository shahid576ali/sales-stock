import countries from "@/assets/images/country";
import React, { useState } from "react";
import { Eye, EyeOff } from 'lucide-react'
import { Link } from "react-router-dom";

const SignUp = () => {

  const [showPass, setShowPass] = useState(false)
  
      const handlePass = ()=>{
          setShowPass((prev)=> !prev)
      }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="top-48 gap-4 right-2 rounded-xl border max-w-[95%] px-6 py-8 w-[830px] flex items-center justify-center h-[480px]">
        <form className="flex flex-col items-left w-[90%] md:w-[55%] justify-center lg:gap-4 gap-2 h-[92%]">
          <h1 className="text-3xl text-gray-500 font-[600]">Sign Up</h1>
          <p className="text-gray-500">Create your account.</p>
          <div className=" w-full flex-col flex lg:flex-row gap-1">
            <input
              className="border border-gray-400 outline-none p-2 px-2 rounded-[8px]"
              type="text"
              name="first"
              placeholder="First Name"
            />
            <input
              className="border border-gray-400 outline-none py-2 px-2 rounded-[8px]"
              type="text"
              name="last"
              placeholder="Last Name"
            />
          </div>
          <div className=" w-full flex-col flex lg:flex-row gap-1">
            <input
              className="border border-gray-400 outline-none p-2 px-2 rounded-[8px]"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="border border-gray-400 outline-none py-2 px-2 rounded-[8px]"
              type="number"
              name="phone"
              placeholder="Phone No."
              onInput={(e) => {
                if (e.target.value.length > 10) {
                  e.target.value = e.target.value.slice(0, 10);
                }
              }}
            />
          </div>
          <div className="lg:w-[94%] w-full flex-col flex lg:flex-row gap-1">
          <div className='flex w-full lg:w-[50%] border py-2 px-2 justify-between border-gray-400 rounded-[8px]'>
                          <input className=' w-full  outline-none  ' type={showPass?"text":"password"} name="password" placeholder='Password' />
                          {!showPass?<Eye onClick={handlePass} className='cursor-pointer' color='gray' />:
                          <EyeOff onClick={handlePass} className='cursor-pointer' color='gray' />}
                      </div>
             <div className='flex w-full lg:w-[50%] border py-2 px-2 justify-between border-gray-400 rounded-[8px]'>
                             <input className=' w-full  outline-none  ' type={showPass?"text":"password"} name="password" placeholder='Password' />
                             {!showPass?<Eye onClick={handlePass} className='cursor-pointer' color='gray' />:
                             <EyeOff onClick={handlePass} className='cursor-pointer' color='gray' />}
                         </div>
          </div>
          <div className="flex gap-2 items-center">
            <input className="mt-1" type="checkbox" name="remember" />
            <p className="text-[11px] lg:text-[14px]">I agry with the terms & conditions</p>
          </div>
          <button className="text-white w-20 py-[6px] rounded-[6px] bg-blue-400">
            SignUp
          </button>
          <p>
            Already have an Account?{" "}
            <Link to={"/login"} className="text-blue-500" href="#">
              Login
            </Link>
          </p>
        </form>
        <img className='w-[40%] hidden lg:block' src={countries.form} alt="background" />
      </div>
    </div>
  );
};

export default SignUp;
