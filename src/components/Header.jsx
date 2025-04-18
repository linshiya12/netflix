import React from 'react'
import { logo_img } from '../utils/constant'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebaseconfig'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from '../utils/userSlice'
import { useEffect } from 'react';

const Header = () => {

  const user= useSelector(store=>store.user)
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const handleSignout=()=>{
    signOut(auth).then(() => {

    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });

    return ()=> unsubscribe()
    
  },[])


  return (
    <div className="absolute px-4 sm:px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex items-center justify-between">
      <img className="w-24 sm:w-40 ml-2 sm:ml-10" src={logo_img} alt="logo" />

      {user && (
        <div className="mr-2 sm:mr-10">
          <button
            className="bg-white text-black cursor-pointer rounded-full font-bold px-4 py-2 text-sm sm:text-base hover:bg-gray-200 transition"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>

  )
}

export default Header