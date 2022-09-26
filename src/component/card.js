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
        }, 3000)
    }, [])

  return (
    <>
    {
        isLoading
        ?
        <SkeletonTheme>
            <Skeleton />
        </SkeletonTheme>
        :
        <Link to={`/movie/${movie.id}`} className="cards_link">
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="overlay">
                    <h3 className="title">{movie?movie.title:"" || movie?movie.name:"" }</h3>
                    <div className="date">
                        {movie?movie.release_date:""}
                         <span className='rating'>
                           <i className="fas fa-star p-1" /> 
                            {movie?movie.vote_average: ""}
                        </span>
                    </div>
            
                </div>
            </div>
        </Link>
    }
    </>
  )
}

export default Card;