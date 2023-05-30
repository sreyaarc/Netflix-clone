import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css";


const img_base_url = "https://image.tmdb.org/t/p/original/";

export default function Banner(props) {
    
    const [movie, setMovie] = useState([]);

    // to run something on a given condition --> useEffect
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const randomNo = Math.floor(Math.random()*request.data.results.length-1);
            setMovie(request.data.results[randomNo]);
            return request;
        }
        fetchData();
    }, [])   // the movie will be rendered only during page refresh
    // console.log(movie);

    function truncate(str, n) {
        return str.length>n ? str.substring(0,n)+" ...." : str;
    }
    // console.log(String(movie.overview).length)

    return (
        <header className="banner" style={{
            backgroundImage: `url(${img_base_url}${movie?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
            }}>  {/* header has a backgorund image */}

            <div className="bannerContents">
                {/* title */}
                <h1 className="bannerTitle">{movie?.name || movie?.original_name}</h1>

                {/* div with 2 buttons */}
                <div className="bannerButtons">
                    <button className="bannerBtn">Play</button>
                    <button className="bannerBtn">My List</button>
                </div>

                {/* p -> description */}
                <h3 className="bannerDesc">{truncate(String(movie.overview), 160)}</h3>
            </div>
            <div className="fadeBottom"></div>
        </header>
    )
}