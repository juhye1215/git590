import React from 'react';
import { Routes, Route} from 'react-router-dom';
/**css */
import './App.css';


/***component */
import Home from './page/home';
import Nav from './component/nav';
import MovieDetail from './page/movieDetail';
import MovieList from './component/movieList';
import Footer from './component/footer';

 
function App() {
  return (
    <div className="App">
<Nav/>

<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/movie/:id' element={<MovieDetail />}></Route>
    <Route path='/movies/:type' element={<MovieList/>}></Route>
    <Route path="/*" element={<h3 style={{padding:"20% 10%", color:"grey"}}>Please click the logo to see the main website</h3>}></Route>
</Routes>

<Footer/>


  </div>
  );
}

export default App;
