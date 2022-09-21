import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";

import Card from './card';
import './moiveList.scss';

function MovieList() {

    const APIKEY = "946a058191022432f7e85fe3211cc9fb";
    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();

    useEffect(() => {
        getData();
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${APIKEY}&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (

        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()} in USA</h2>
            <div className="list__cards">
                {
                    movieList.map((movie,i )=> (
                        <Card key={i} movie={movie}/>
                    ))
                }
            </div>
        </div>
        
    )
}

export default MovieList; 