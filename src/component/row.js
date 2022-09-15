import axios from '../axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "./row.scss";

function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {

      setTimeout( ()=>{
        setIsLoading(false);
    }, 1500)
        
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            // return request;
        }
        fetchData();        
    }, [fetchUrl])


  return (
<div className='row'>
<h2>{title}</h2>
        
<div className='posters' >
 {
    movies.map((list,i)=> {
        return(
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
        <Link to={`/movie/${list.id}`} className="cards_link">
          <div className='main-cards'>
           <img key={i} 
             src={"https://image.tmdb.org/t/p/original" + list.backdrop_path} 
             alt={list.name} />
                 <div className="overlay">
                    <div className="title">{list?list.original_title:""}{list?list.name:""}</div>
                    <div className="runtime">
                        {list?list.release_date:""}
                    </div>
                </div>
              </div>
           </Link>
    }
      </>
        )
    })
 }       
</div>

</div>
  )
}

export default Row;