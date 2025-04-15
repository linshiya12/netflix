import React, {useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { login_bg_img } from '../utils/constant'
import Footer from '../components/Footer'

const Login = () => {

  const [isSIgnin,setisSignin]=useState(true)
  const ToggleSignupform=()=>{
    setisSignin(!isSIgnin)
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='brightness-50' src={login_bg_img} alt="bg" />
      </div>
      <form className='m-30 w-110 p-15 mx-auto right-0 left-0 absolute bg-black/65 text-white '>
        <h1 className='font-bold text-3xl pb-6 '>{isSIgnin?"Sign In":"Sign Up"}</h1>
        {!isSIgnin&&<input type="text" placeholder='Full Name' className='p-4 mb-2 mt-2 border-1 border-gray-500 w-full rounded-sm' />}
        <input type="text" placeholder='email' className='p-4 mb-2 mt-2 border-1 border-gray-500 w-full rounded-sm' />
        <input type="password" placeholder='password' className='p-4 mb-2 mt-2 border-1 border-gray-500 w-full rounded-sm' />
        <button className='p-2 mb-2 mt-2 w-full bg-red-600 rounded-sm'>Sign In</button>
        {isSIgnin&&<p className='text-white/90 underline text-center pt-2 pb-2'>Forgot Password?</p>}
        {isSIgnin&&<div className=" pt-2 pb-2 flex items-center space-x-2">
          <input
            type="checkbox"
            className="size-5 border text-amber-50 border-gray-500 rounded-sm"
            id="remember"
          />
          <label htmlFor="remember" className="text-white">
            Remember me
          </label>
        </div> }
        <div className='flex pt-2 pb-2'>
          <p className='text-white/60'>{isSIgnin?"New to Netflix?":"already registered"}</p>
          <p className='font-semibold cursor-pointer' onClick={ToggleSignupform}>{isSIgnin?"Sign up now":"sign In Now."}</p>
          
        </div>   
        {isSIgnin&&<p className=' pt-2 pb-2 text-white/60 text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>}
        {isSIgnin&&<Link to="/about" className=" pt-2 pb-2 text-blue-700 underline text-xs">
          Learn more
        </Link>}
      </form>
    </div>
   
  )
}

export default Login