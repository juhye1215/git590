import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import './card.scss';


function Card({movie}) {

    const [isLoading, setIsLoading] = useState(true);
    const APIKEY = "946a058191022432f7e85fe3211cc9fb";

    useEffect( () => {
        setTimeout( ()=>{
            setIsLoading(false);
        }, 1500)
    }, [])

  return (
    <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme>
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div> 
        :
        <Link to={`/movie/${movie.id}`} className="cards_link">
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="overlay">
                    <div className="title">{movie?movie.original_title:""}</div>
                    <div className="runtime">
                        {movie?movie.release_date:""}
                    </div>
                </div>
            </div>
        </Link>
    }
    </>
  )
}

export default Card;