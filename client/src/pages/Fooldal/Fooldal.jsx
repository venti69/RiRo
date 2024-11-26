import React from 'react';
import NewsCarousel from '../../components/Carousel'; 
import { Link } from 'react-router-dom';


const Fooldal = () => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    
    const slides = [
        "https://via.placeholder.com/1200x500/FF5733/ffffff?text=Slide+1",
        "https://via.placeholder.com/1200x500/33FF57/ffffff?text=Slide+2",
        "https://via.placeholder.com/1200x500/3357FF/ffffff?text=Slide+3",
      ];

    return (
        <div>
            <NewsCarousel />
            <h1>Üdvözlünk a RiRó Korházunk főoldalán</h1>
            <h6>További információért kattints az alábbi <Link to={"/info"}>linkre</Link> </h6>
        </div>
    );
};

export default Fooldal;
