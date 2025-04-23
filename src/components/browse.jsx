import React, { useEffect } from 'react'
import Header from './Header'
import useNowplayingMovies from '../hooks/useNowplayingMovies'
import MainMoviecontainer from './MainMoviecontainer';
import SecondaryMoviecontainer from './SecondaryMoviecontainer';
import useTrendyMovie from '../hooks/useTrendyMovie';
import useUpcomingMovies from '../hooks/useUpcoming';
import usePopularMovies from '../hooks/usePopularMovies';
const browse = () => {

  useNowplayingMovies();
  useTrendyMovie();
  useUpcomingMovies();
  usePopularMovies();

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