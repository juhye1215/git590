import axios from '../axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "./row.scss";

function Row({title, fetchUrl}) {

  const [movies, setMovies]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {

      setTimeout( ()=>{
        setIsLoading(false);
    }, 8000)
        

    async function fetchData() {
        const request = await axios.get(fetchUrl);

        setMovies(request.data.results);
     //   console.log(request.data.results);
        return request;
    }
    fetchData();        
}, [fetchUrl])


  return (
<div className='row'>
<h2> {isLoading ? <span>Loading....</span> : title}  </h2>


<div className='posters' >
 {
    movies.map((list,i)=> {
        return(
       <>

        <Link to={`/movie/${list.id}`} className="cards_link" >
          <div className='main-cards' key={i} >
            {isLoading  ?
              <SkeletonTheme >
                <Skeleton/>
              </SkeletonTheme>
            :
             <img src={`https://image.tmdb.org/t/p/original${list?list.backdrop_path:"" || list?list.poster_path:""}` } alt={list.name} />
            }

                 <div className="overlay">
                    <h5 className="title">
                      {list?list.title:""  ||  list?list.name:"" }
                    </h5>
                    <p className="runtime">
                      {list?list.release_date:"" || list?list.first_air_date:""} 
                    </p>
                </div>
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