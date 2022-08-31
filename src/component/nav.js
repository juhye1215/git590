import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

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


<nav className={`navbar navbar-expand-md fixed-top  ${show && "nav_black"}`} >
  <div className="container-fluid">
    <Link to="/" className='navbar-brand'>
      <img src='https://seeklogo.com/images/P/Popcorn-logo-B0FCB82BF8-seeklogo.com.png'/>
       <p>by ASU Student</p>
    </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to ="/movies/popular" className="nav-link">Popular</Link>
        </li>
        <li className="nav-item">
          <Link to ="/movies/top_rated" className='nav-link'>Top50</Link>
        </li>
        <li className="nav-item">
          <Link to ="/movies/upcoming" className='nav-link'>Upcoming</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>



  )
}

export default Nav;