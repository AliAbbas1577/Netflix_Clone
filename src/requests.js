const API_KEY='681773603eed0ea9ecb5f127b9f08e93';


const requests={
    fetchTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedyMovies:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
}


export default requests;