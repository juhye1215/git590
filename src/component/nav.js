import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import MovieList from './movieList';

import "./nav.scss";

function Nav() {

  const[show, handleShow]=useState(false);

  useEffect(()=>{
     window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
         handleShow(true);
      }else{
        handleShow(false);
      }
     });
  
  }, [ ]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className='nav-left'>
            <Link to="/" className='logo'><img  src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'  alt='netflix logo'/>
            </Link>
            <Link to ="/movies/popular">Popular</Link>
            <Link to ="/movies/top_rated">Top50</Link>
            <Link to ="/movies/upcoming">Upcoming</Link>
          </div>
          <Link to="/"><img className='avatar' src=' https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'  alt='avatar'/></Link>
    </div>
  )
}

export default Nav;