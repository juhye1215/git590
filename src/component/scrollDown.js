import React, {useState} from 'react'; 
import "./scrollDown.scss";

const ScrollButton = () =>{ 

    const [visible, setVisible] = useState(true) 
      
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 0){ 
        setVisible(false) 
      }  
      else if (scrolled <= 0){ 
        setVisible(true) 
      } 
    }; 
      
    const scrollToBottom = () =>{ 
      window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: 'auto'
      }); 
    }; 
      
    window.addEventListener('scroll', toggleVisible); 
      
    return ( 
      <button className='btn down-btn' onClick={scrollToBottom}  
      style={{display: visible ? 'inline' : 'none'}} > 
        <i className="fas fa-arrow-down"></i>
      </button> 
    ); 
  } 
      
  export default ScrollButton;