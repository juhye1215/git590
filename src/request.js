const APIKEY = "946a058191022432f7e85fe3211cc9fb";

const request ={

    fetchNewMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&primary_release_year=2022&sort_by=popularity.desc&language=en-US`,

    fetchKidsMovies: `https://api.themoviedb.org/3/discover/movie?&api_key=${APIKEY}&with_genres=16&primary_release_year=2022&sort_by=popularity.desc`,

    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=10749&language=en-US`,

    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=27&language=en-US`,

    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=35&language=en-US`,

    fetchAwardedMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=vote_count.desc`,

    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=28&language=en-US`,

}

export default request;