import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

/**component */
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./home.scss";
import Row from '../component/row';
import requests from '../request';
import ScrollButton from '../component/scrollDown';



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
                  <img src={`https://image.tmdb.org/t/p/original${main?main.backdrop_path:""}`} />
              </div>
            <div className='poster-overlay'>
               <div className='poster_title'>{main? main.title: ""}</div>
              <div className='poster_date'> {main? main.release_date : ""} </div>
              <div className='poster_description'>{main?main.overview: "" } </div>
            </div>
           </Link>
          ))
         }
</Carousel>
</div>

<ScrollButton/>

<Row title="New Movies" fetchUrl={requests.fetchNewMovies}/>
<Row title="Awarded Movies" fetchUrl={requests.fetchAwardedMovies}/>
<Row title="Animation" fetchUrl={requests.fetchKidsMovies}/> 
<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
</>
  )
}

export default Home;