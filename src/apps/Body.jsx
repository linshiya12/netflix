import React, { useEffect } from 'react'
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Login} from '../components/Login'
import Browse from '../components/browse';

const Body = () => {

  const approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse />
    },
    
  ])


  return (
    <div><RouterProvider router={approuter}/></div>
  )
}



export default Body