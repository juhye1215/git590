import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import movieTrailer from 'movie-trailer';
import "./movieDetail.scss";
import YouTube from "react-youtube";


function MovieDetail() {

    const APIKEY = "946a058191022432f7e85fe3211cc9fb";
    const [movieDetail, setMovie] = useState()
    const { id } = useParams()
    const [trailerUrl, setTrailerUrl]= useState("");


    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }


   const trailer=(movieDetail) =>{
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movieDetail?.title || movieDetail?.name || movieDetail?.original_name || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
                console.log("Param", urlParams.get("v"))
            })
        }
    }

    const options = {
      height: '450',
      width: '100%',
        playerVars:{
            autoplay:1,
        },
    }


    return (
        <div className="movie">
          
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${movieDetail?movieDetail.backdrop_path : ""}`} />
            </div>
            
            <div className="movie__detail">

                <div className="movie__img">
                    <img className="poster" src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} />
                </div>

                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <h1>{movieDetail ? movieDetail.original_title : ""}</h1>
                        <p>{movieDetail ? movieDetail.tagline : ""}</p>
                        <p className="rating">
                            {movieDetail ? movieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="voteCount">{movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}</span>
                        </p>  
                        <p className="movie__runtime">{movieDetail ? movieDetail.runtime + " mins" : ""}</p>
                        <p className="movie__releaseDate">{movieDetail ? "Release Date: " + movieDetail.release_date : ""}</p>
                        <div className="genres">
                            {
                                movieDetail && movieDetail.genres
                                ? 
                                movieDetail.genres.map(genre => (
                                    <><span id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="description">
                        <p>{movieDetail ? movieDetail.overview : ""}</p>
                    </div>
                </div>
            </div>

        <div className="trailer" >
            <div className="d-flex justify-content-between">
                <h2 >Trailer</h2>
                <button type="button" className="btn btn-primary"onClick={()=> trailer(movieDetail)}> Watch    <i className="fas fa-play ps-2"></i> </button>
             </div>
                  {
                  trailerUrl && 
                  <YouTube videoId={trailerUrl} opts={options} className="youtube" />
                  }
            </div>

            <div className="movie__info">
                <h2>Information</h2>

                <div className="d-flex justify-content-end">
                {
                    movieDetail && movieDetail.homepage && 
                   <a href={movieDetail.homepage} target="_blank"  class="btn btn-success text-dark" >Homepage <i className="fas fa-external-link-alt p-2"></i>
                  </a>
                }
                {
                    movieDetail && movieDetail.imdb_id && 
                  <a href={"https://www.imdb.com/title/" + movieDetail.imdb_id} target="_blank"className="btn btn-warning" >IMDb<i className="fas fa-external-link-alt p-2"></i>
                </a>
                }
                </div>
            </div>

            <div className="production">
                <h2>Production Companies</h2>
               
                <div className="d-flex justify-content-start pt-3">
                {
                    movieDetail && movieDetail.production_companies && movieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="company-logo">
                                    <img src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <p>{company.name}</p>
                                </span>
                            }
                        </>
                    ))
                }
                </div>
            </div>

    </div>
    )
}

export default MovieDetail;