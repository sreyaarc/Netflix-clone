const apiKey = process.env.REACT_APP_API_KEY;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    // fetchNetflixOriginals: `/network/213?api_key=${apiKey}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${apiKey}&with_genres=12`,
    fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchAnimationMovies: `/discover/movie?api_key=${apiKey}&with_genres=16`,
    fetchMysteryMovies: `/discover/movie?api_key=${apiKey}&with_genres=9648`,
    fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDramaMovies: `/discover/movie?api_key=${apiKey}&with_genres=18`,
    fetchDocumentaryMovies: `/discover/movie?api_key=${apiKey}&with_genres=99`,
    fetchTVShows: `/discover/tv?api_key=${apiKey}&language=en-US`
}


export default requests;