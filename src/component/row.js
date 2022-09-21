import axios from '../axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "./row.scss";

function Row({title, fetchUrl}) {

  const [movies, setMovies]= useState([]);
  const [isLoading, setIsLoading] = useState(true);

 const fetchData = async ()=>{
    try{
        const response = await axios.request(fetchUrl);
        // return the whole response object instead of only the data.
        // this helps in error handling in the component
        return response;
    }
    catch(error){}
   }
  
    useEffect(() => {

      setTimeout( ()=>{
        setIsLoading(false);
    }, 1500)

    fetchData().then(res=>{
      setMovies(res.data.results);
      console.log(res.data.results);
    })
  },[])


        
//     async function fetchData() {
//         const request = await axios.get(fetchUrl);
//         setMovies(request.data.results);
//         console.log(request.data.results);
//         return request;
//     }
//     fetchData();        
// }, [fetchUrl])


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
        <Link to={`/movie/${list.id}`} className="cards_link" >
          <div className='main-cards' key={i} >
             <img src={`https://image.tmdb.org/t/p/original${list?list.backdrop_path:""}`} alt={list.name} />
                 <div className="overlay">
                    <h5 className="title">{list?list.title:""}{list?list.name:""}</h5>
                    <p className="runtime">
                        {list?list.release_date:""}  {list?list.first_air_date:""}
                    </p>
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