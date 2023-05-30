import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}  isFirstRow={true} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Adventure Movies" fetchURL={requests.fetchAdventureMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Animation Movies" fetchURL={requests.fetchAnimationMovies} />
      <Row title="Mystery Movies" fetchURL={requests.fetchMysteryMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Drama Movies" fetchURL={requests.fetchDramaMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaryMovies} />
      <Row title="TV Shows" fetchURL={requests.fetchTVShows} />
    </div>
  );
}

export default App;
