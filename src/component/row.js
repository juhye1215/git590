import axios from '../axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

//import movieTrailer from 'movie-trailer';
import "./row.scss";

function Row({title, fetchUrl, isLargeRow}) {
  const base_url= "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies]= useState([]);


//   const [trailerUrl, setTrailerUrl]= useState("");

    useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();        
    }, [fetchUrl])

    // const handleClick=(movie) =>{
    //     if(trailerUrl){
    //         setTrailerUrl("")
    //     }else{
    //         movieTrailer(movie?.title || movie?.name || movie?.original_name || "").then(url => {
    //             const urlParams = new URLSearchParams(new URL(url).search);
    //             setTrailerUrl(urlParams.get("v"));
    //             console.log("Param", urlParams.get("v"))
    //         }).catch((error) =>alert ("Not available at this time"));
    //     }
    // }

    // const options = {
    //     height:"auto",
    //     width:"100%",
    //     playerVars:{
    //         autoplay:1,
    //     },
    // }

  return (
    <div className='row'>
        <h2>{title}</h2>
        
<div className='posters' >
 {
    movies.map((list,i)=> {
        return(
       <>
        <Link to={`/movie/${list.id}`} className="cards_link">
           <img key={i} 
             className={`imageposter ${isLargeRow && "posterLarge"}`} 
             src={`${base_url}${isLargeRow ? list.poster_path : list.backdrop_path }`} 
             alt={list.name} />
                 <div className="overlay">
                    <div className="title">{list?list.original_title:""}</div>
                </div>
           </Link>
      </>
        )
    })
 }       
</div>

</div>
  )
}

export default Row;