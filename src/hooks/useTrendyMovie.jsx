import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addTrendingingMovies } from '../utils/Movieslice'
import { Trendyurl } from '../utils/constant'
import { options } from '../utils/constant'

const useTrendyMovie = () => {
    const dispatch=useDispatch()
    const getTrendyMovies=async ()=>{
      const data=await fetch(Trendyurl,options)
      const json=await data.json()
      dispatch(addTrendingingMovies(json.results))
    }
  
    useEffect(()=>{
      getTrendyMovies()
    },[])

}

export default useTrendyMovie