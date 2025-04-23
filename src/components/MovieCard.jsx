import { img_urlpath } from "../utils/constant"

const MovieCard = ({NowplayingMovies}) => {
  return (
    <div className="w-32 sm:w-40 md:w-52 pr-4 sm:pr-3 md:pr-4 transform transition-transform duration-300 hover:scale-110">
        <img src={img_urlpath+NowplayingMovies} alt="nowplayingimage" className="w-full h-auto object-cover rounded" />
    </div>
  )
}

export default MovieCard