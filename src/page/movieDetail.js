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
        height:"auto",
        width:"100%",
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
                        <div className="movie__genres">
                            {
                                movieDetail && movieDetail.genres
                                ? 
                                movieDetail.genres.map(genre => (
                                    <><span id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                            <button onClick={()=> trailer(movieDetail)}>Click here to view the movie trailer  <i class="fas fa-angle-down"></i>
                </button>
                        </div>
                    </div>

                    <div className="description">
                        <p>{movieDetail ? movieDetail.overview : ""}</p>
                    </div>

                </div>
            </div>


            <div className="trailer" >
                  {
                  trailerUrl && 
                  <YouTube videoId={trailerUrl} opts={options} height="800"/>
                  }
            </div>

            <div className="movie__links">
                <div className="movie__heading" >View More Info</div>
                {
                    movieDetail && movieDetail.homepage && <a href={movieDetail.homepage} target="_blank" style={{textDecoration: "none"}} ><p><span className="movie__homeButton movie__Button" >Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
        
                }
       
                {
                    movieDetail && movieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + movieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
 
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    movieDetail && movieDetail.production_companies && movieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>

    </div>
    )
}

export default MovieDetail;