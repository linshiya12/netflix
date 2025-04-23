import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { options } from '../utils/constant'
import { Upcomurl } from '../utils/constant'
import { addUpcomingMovies } from '../utils/Movieslice'

const useUpcomingMovies = () => {
    const dispatch=useDispatch()
    const getupcomingMovies=async ()=>{
      const data=await fetch(Upcomurl,options)
      const json=await data.json()
      console.log(json.results)
      dispatch(addUpcomingMovies(json.results))
    }
  
    useEffect(()=>{
      getupcomingMovies()
    },[])

}

export default useUpcomingMovies