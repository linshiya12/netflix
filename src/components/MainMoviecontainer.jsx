import Videobackground from "./Videobackground"
import Videotitle from "./Videotitle"
import { useSelector } from "react-redux"


const MainMoviecontainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if (movies=== null) return;

    const Mainmovie=movies[2];
    const {overview,original_title,id}=Mainmovie
    // console.log(Mainmovie)
    return (
        <div>
            <Videotitle title={original_title} overview={overview}/>
            <Videobackground id={id}/>    

        </div>
    )
}

export default MainMoviecontainer