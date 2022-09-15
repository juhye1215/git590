import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
/**component */
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./home.scss";
import Row from '../component/row';
import requests from '../request';

function Home() {

 const [popularMovies, setPopularMovies] = useState([]);
 const APIKEY = "946a058191022432f7e85fe3211cc9fb";

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US`)
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, [])



  return (
    <>
    
<div className='poster'>

  <Carousel
      autoPlay={true}
      transitionTime={5}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      >

         {
          popularMovies.map((main,i) => (
            <Link to={`/movie/${main.id}`} key={i}>
              <div className='poster-img'>
                  <img src={"https://image.tmdb.org/t/p/original" + main.backdrop_path} />
              </div>
            <div className='poster-overlay'>
               <div className='poster_title'>{main? main.original_title: ""}</div>
              <div className='poster_date'> {main? main.release_date : ""} </div>
              <div className='poster_description'>{main?main.overview: "" } </div>
            </div>
           </Link>
          ))
         }
</Carousel>
</div>

<Row title="Originals Series" fetchUrl={requests.fetchNetflixOriginals}/>
<Row title="Popular Movies" fetchUrl={requests.fetchTrending}/>
<Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> 
    
    </>
  )
}

export default Home;