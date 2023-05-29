import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

// instance.get("/newPage") --> this will append this piece of url to the base url
// and the url becomes "https://api.themoviedb.org/3/newPage"
export default instance;