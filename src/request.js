const APIKEY = "946a058191022432f7e85fe3211cc9fb";

const requests ={

    fetchNewMovies: `/discover/movie?api_key=${APIKEY}&primary_release_year=2022&sort_by=popularity.desc&language=en-US`,

    fetchKidsMovies: `/discover/movie?&api_key=${APIKEY}&with_genres=16&&\primary_release_year=2022&sort_by=popularity.desc`,

    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,

    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,

    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,

    fetchAwardedMovies: `/discover/movie?api_key=${APIKEY}&sort_by=vote_count.desc`,

    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,

    fetchTopRated: `/movie/top-rated?api_key=${APIKEY}&language=en-US`,

    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,



}

export default requests;