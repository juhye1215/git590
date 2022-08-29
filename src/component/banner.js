import React from 'react';
import  {useState, useEffect}from 'react';
import axios from '../axios';
import requests from '../request';

import "./nav.scss";
import './banner.scss';

function Banner() {
    const [movie,  setMovie] = useState([]);

    useEffect( ()=> {

        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request);
            setMovie(
                request.data.results [
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            );
            return request;
        }
        fetchData();
    }, []);

/**limit the text number of description */
function truncate(str, n){
    return str?.length> n? str.substr(0, n-1) + "..." : str;
}

  return (
    <div>
        <header className='banner' 
        style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>

        <div className='banner_contents'>
            <h1>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            
            <div className='banner_btn'>
                <button type='button'>Play</button>
                <button type='button'>My List</button>
            </div>

            <h3>{truncate(movie?.overview,200)}</h3>
        </div>        

        <div className='fade'></div>
        </header>
    </div>
  )
}

export default Banner;