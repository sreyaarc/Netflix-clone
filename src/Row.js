import { useState, useEffect } from "react";
import axios from "./axios";  // instance
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// import ReactPlayer from "react-player/youtube";

const img_base_url = "https://image.tmdb.org/t/p/original/";  // baseUrl + file_size + poster_path

function Row(props) {
    const [movies, setMovies] = useState([]);
    const [trailerURLId, setTrailerURLId] = useState("");

    useEffect(() => {   // useEffect has a function and a dependency. When the dependency is an empty arr, the fn loads only on page refresh. But if a value is passed, then whenever the value changes, the fn also changes
        async function fetchData() {
            const request = await axios.get(props.fetchURL)   // axios appends this url to the baseurl
            // console.log(request);   request.data.results gives all the information about the movies
            setMovies(request.data.results);
            return request;
        };
        fetchData();

    }, [props.fetchURL])   // so everytime the movies change ie, API fetches new movies, I want the change to be reflected in the browser as well so adding props.fetchURL here.
    // console.log(movies);   // contains all the movies from request.data.results

    // playing the trailers
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
    };

    // getting the url or id of the clicked image to play the trailer
    function getURL(movie) {
        if(trailerURLId) {   // if a trailer is already playing, clicking on the image again will stop it
            setTrailerURLId("");
        } else {
            movieTrailer(movie?.original_name || movie?.original_title || movie?.name|| "") // returns a youtube url using the given parameter
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                // urlParams.get("v")   // returns a string(value of "v")
                console.log("url: " + url)
                setTrailerURLId(urlParams.get('v'));
            })
            .catch((err) => {
                console.log(err)
            });
        }
    }

    return (
        <div className="row">
            <h2 style={{marginTop : props.isFirstH2? "15px":null}}>{props.title}</h2>
            <div className="rowPosters">
                {/* several posters */}
                {movies.map((movie) => (
                    <img className={props.isFirstRow? "rowPosterImg largePosterImg": "rowPosterImg"} 
                    onClick={() => getURL(movie)}  
                    key={movie.id} src={props.isFirstRow? `${img_base_url}${movie?.poster_path}`: `${img_base_url}${movie?.backdrop_path}`} 
                    alt={movie.title} />
                ))}
            </div>
            {trailerURLId && <YouTube videoId={trailerURLId} opts={opts} />}
            {/* <ReactPlayer url={trailerURL} controls={true} width="100%" /> */}
        </div>
    )
}
export default Row;
