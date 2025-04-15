import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from '../components/Login'
import browse from '../components/browse'

const Body = () => {

  const approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<browse/>
    }
  ])
  return (
    <div><RouterProvider router={approuter}/></div>
  )
}

export default Body