import React, { useEffect } from 'react'
import Header from './Header'
import useNowplayingMovies from '../hooks/useNowplayingMovies'
import MainMoviecontainer from './MainMoviecontainer';
import SecondaryMoviecontainer from './SecondaryMoviecontainer';

const browse = () => {

  useNowplayingMovies();
  return (
    <div>
      <Header/>
      <MainMoviecontainer/>
      <SecondaryMoviecontainer/>
      {/* -Maincontainer
        -videobackground
        -videotitle
      -secondarycontainer
        -movielists 
          -cards*n
        */}

    </div>
  )
}

export default browse