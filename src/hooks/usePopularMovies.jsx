import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { options } from '../utils/constant'
import { addPopularMovies } from '../utils/Movieslice'
import { PopularUrl } from '../utils/constant'

const usePopularMovies = () => {
    const dispatch=useDispatch()
    const getPopularMovies=async ()=>{
      const data=await fetch(PopularUrl,options)
      const json=await data.json()
      dispatch(addPopularMovies(json.results))
    }
  
    useEffect(()=>{
      getPopularMovies()
    },[])
}

export default usePopularMovies