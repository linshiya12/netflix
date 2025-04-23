import { options } from '../utils/constant'
import { url } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/Movieslice'
import { useEffect } from 'react'

const useNowplayingMovies = () => {
    const dispatch=useDispatch()
    const getNowplayingMovies=async ()=>{
      const data=await fetch(url,options)
      const json=await data.json()
      dispatch(addNowPlayingMovies(json.results))
    }
  
    useEffect(()=>{
      getNowplayingMovies()
    },[])

}

export default useNowplayingMovies