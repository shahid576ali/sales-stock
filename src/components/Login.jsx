import countries from '@/assets/images/country'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [showPass, setShowPass] = useState(false)

    const handlePass = ()=>{
        setShowPass((prev)=> !prev)
    }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
    <div className='top-48 gap-8 right-2 rounded-xl border px-6 py-8 w-[830px] flex items-center justify-center max-w-[90%] h-[480px]'>
        <form className='flex flex-col items-left w-[90%] md:w-[55%] justify-around h-[92%]'>
        <h1 className='text-3xl text-gray-500 font-[600]'>Sign In</h1>
            <p className='text-gray-500'>Login to stay connected.</p>
            <input className='border border-gray-400 outline-none p-2 px-2 rounded-[8px]' type="email" name="email" placeholder='Email' />
            <div className='flex w-full border py-2 px-2 justify-between border-gray-400 rounded-[8px]'>
                <input className=' w-full  outline-none  ' type={showPass?"text":"password"} name="password" placeholder='Password' />
                {!showPass?<Eye onClick={handlePass} className='cursor-pointer' color='gray' />:
                <EyeOff onClick={handlePass} className='cursor-pointer' color='gray' />}
            </div>
            <div className='flex gap-2 items-center'>
            <input className='mt-1' type="checkbox" name="remember" />
            <p>Remember Me</p>
            </div>
            <a className='text-blue-500 text-right' href="#">Forgot Password?</a>
            <button className='text-white w-20 py-[6px] rounded-[6px] bg-blue-400' >Sign In</button>
            <p>Create an Account <Link to={"/signup"} className='text-blue-500' href="#">Sign Up</Link></p>
        </form>
        <img className='w-[40%] hidden lg:block' src={countries.form} alt="background" />
    </div>
    </div>
  )
}

export default Login