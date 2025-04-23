import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
  return (
    <div>
        <div className="ml-4 px-4 md:px-8">
            <h1 className="text-lg md:text-2xl py-3 font-semibold text-white">{title}</h1>
            <div className="flex overflow-x-auto no-scrollbar space-x-4 ">
                <div className="flex ">
                    {movies.map((movie)=><MovieCard key={movie.id} NowplayingMovies={movie.poster_path}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieList