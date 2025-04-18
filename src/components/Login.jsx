import React, {useEffect, useRef, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { login_bg_img } from '../utils/constant'
import Footer from '../components/Footer'
import { checkNameData, checkValidData } from '../utils/validation'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebaseconfig'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'


export const Login = () => {

  const [isSIgnin,setisSignin]=useState(true)
  const [errorMessage,setErrormessage]=useState(null)
  const [nameError,setnameError]=useState(null)
  const email=useRef(null)
  const password=useRef(null)
  const Fullname=useRef(null)
  const dispatch=useDispatch()
  const ToggleSignupform=()=>{
    setisSignin(!isSIgnin)
  }
  const handleButtonClick=()=>{
      const message=checkValidData(email.current.value,password.current.value)
      setErrormessage(message)

      if (!isSIgnin && Fullname.current) {
        const nameErrorMessage = checkNameData(Fullname.current.value)
        setnameError(nameErrorMessage)
        if (nameErrorMessage) return;
      }

      if (message) return;

      if(!isSIgnin){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: Fullname.current.value
          }).then(() => {
              const {uid,email,displayName} = auth.currentUser;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}));
          }).catch((error) => {
              setErrormessage(error.message)
          });
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode+" "+errorMessage)
          // ..
        });
      } else{

          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrormessage(errorCode+"-"+errorMessage)
          });

      }

  }

  useEffect(()=>{
        if (errorMessage||nameError){
          const timer=setTimeout(
            ()=>{
              setErrormessage("")
              setnameError("")
            },3000
          )
          return()=>clearTimeout(timer)
        }
  },[errorMessage,nameError])

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='brightness-50' src={login_bg_img} alt="bg" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='m-30 w-110 p-15 mx-auto right-0 left-0 absolute bg-black/65 text-white '>
        <h1 className='font-bold text-3xl pb-6 '>{isSIgnin?"Sign In":"Sign Up"}</h1>
        <p className='text-red-500'>{errorMessage||nameError}</p>
        {!isSIgnin&&<input ref={Fullname} type="text" placeholder='Full Name' className='p-4 mb-2 mt-2 border-1 border-gray-500 w-full rounded-sm' />}
        <input type="text" ref={email} placeholder='email' className='p-4 mb-2 mt-2 border-1 border-gray-500 w-full rounded-sm' />
        <input type="password" ref={password} placeholder='password' className='p-4 mb-2 mt-2 border-1 border-gray-500 w-full rounded-sm' autoComplete="current-password" />
        <button className='p-2 mb-2 mt-2 w-full bg-red-600 rounded-sm' onClick={handleButtonClick}>Sign In</button>
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
        {isSIgnin&&<p className=' pt-2 pb-2 text-white/60 text-xs'>This page is protected by Google reCAPTCHA to ensure youre not a bot.</p>}
        {isSIgnin&&<Link to="/about" className=" pt-2 pb-2 text-blue-700 underline text-xs">
          Learn more
        </Link>}
      </form>
    </div>
   
  )
}
