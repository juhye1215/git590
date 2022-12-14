const APIKEY = "946a058191022432f7e85fe3211cc9fb";

const request ={

    fetchNewMovies: `/discover/movie?api_key=${APIKEY}&primary_release_year=2022&sort_by=popularity.desc&language=en-US&with_original_language=en&region=US`,

    fetchKidsMovies: `/discover/movie?&api_key=${APIKEY}&with_genres=16&primary_release_year=2022&sort_by=popularity.desc&with_original_language=en&region=US`,

    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749&language=en-US&with_original_language=en&region=US`,

    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27&language=en-US&with_original_language=en&region=US`,

    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35&language=en-US&with_original_language=en&region=US`,

    fetchAwardedMovies: `/discover/movie?api_key=${APIKEY}&sort_by=vote_count.desc&with_original_language=en&region=US`,

    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28&language=en-US&with_original_language=en&region=US`,

}

export default request;