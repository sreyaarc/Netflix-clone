import { useState, useEffect } from "react";
import axios from "./axios";  // instance
import "./Row.css";

const img_base_url = "https://image.tmdb.org/t/p/original/";  // baseUrl + file_size + poster_path

function Row(props) {
    const [movies, setMovies] = useState([]);

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

    return (
        <div className="row">
            <h1>{props.title}</h1>
            <div className="rowPosters">
                {/* several posters */}
                {movies.map((movie) => (
                    <img className={props.isFirstRow? "rowPosterImg largePosterImg": "rowPosterImg"} key={movie.id} src={props.isFirstRow? `${img_base_url}${movie.poster_path}`: `${img_base_url}${movie.backdrop_path}`} alt={movie.title} />
                ))}
            </div>
        </div>
    )
}
export default Row;
