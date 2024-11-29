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
        <div style={{overflowX: 'hidden', height: "100vh"}}>
            <NewsCarousel />
        </div>
    );
};

export default Fooldal;
