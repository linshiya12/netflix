import React from 'react'
import { useEffect, useState } from "react"
import { options } from "../utils/constant"
import { trailor_url1 } from '../utils/constant'
import { trailor_url2 } from '../utils/constant'

const useMovietrailer = (id) => {
    const [trailerId,settrailerId]=useState(null)
    const video=async()=>{
        const url=trailor_url1+id.id+trailor_url2
        const data=await fetch(url,options)
        const json=await data.json()
        const filterData =json.results.filter((video)=>video.type==="Trailer")
        const trailer=filterData.length?filterData[0]:json.results[0];
        settrailerId(trailer.key)
      } 
    
      useEffect(()=>{
            video()
      },[])
    return trailerId;
}

export default useMovietrailer