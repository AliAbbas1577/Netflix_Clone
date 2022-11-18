
import './App.css';
//components
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';
//request
import requests from './requests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* {nav} */}
      <Nav/>
        <Banner/>
        <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending" fetchURL={requests.fetchTrending}/>
        <Row title="TopRated" fetchURL={requests.fetchTopRated}/>
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
        <Row title="Documentries" fetchURL={requests.fetchDocumentries}/>
        <Row title="TvShows" fetchURL={requests.fetchTvShow}/>
        <Footer/>
    </div>
  );
}

export default App;
