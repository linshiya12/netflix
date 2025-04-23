import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryMoviecontainer = () => {
    const Movies=useSelector((store)=>store.movies.nowPlayingMovies)
    const TrendingMovies=useSelector((store)=>store.movies.trendingMovies)
    const UpcomingMovies=useSelector((store)=>store.movies.upcomingMovies)
    const PopularMovies=useSelector((store)=>store.movies.popularMovies)
    if (Movies=== null||TrendingMovies===null||UpcomingMovies===null||PopularMovies===null) return;
    return (
        <div className="bg-black w-full">
            <div className="relative z-10 m:-mt-6 md:-mt-20 lg:-mt-72 space-y-0">
            <MovieList title="nowplaying" movies={Movies}/>
            <MovieList title="Trending" movies={TrendingMovies}/>
            <MovieList title="Upcoming" movies={UpcomingMovies}/>
            <MovieList title="Popular" movies={PopularMovies}/>
            {/* movielists-popular
                moviecatrds*n
            movielists-nowplaying
            movielists-trending
            movielists-horror */}
            </div>
        </div>
    )
}

export default SecondaryMoviecontainer