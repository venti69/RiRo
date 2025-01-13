import React from 'react';
import NewsCarousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import '../../css/images.css';
import Romeo from '../../assets/images/Romeo.jpg';
import Ricsi from '../../assets/images/Ricsi.jpg';
import Bodrogi from '../../assets/images/Bodrogi.jpg';
import bgi from '../Home/bg/bgi.jpg';


const Fooldal = () => {
    window.onload = function () {
        // Ellenőrizzük, hogy az oldal már újratöltődött-e ebben a munkamenetben
        if (!sessionStorage.getItem('hasReloaded')) {
            sessionStorage.setItem('hasReloaded', 'true'); // Beállítjuk, hogy újratöltött
            window.location.reload(); // Oldal újratöltése
        }
    };
    
    
        const slides = [
        "https://via.placeholder.com/1200x500/FF5733/ffffff?text=Slide+1",
        "https://via.placeholder.com/1200x500/33FF57/ffffff?text=Slide+2",
        "https://via.placeholder.com/1200x500/3357FF/ffffff?text=Slide+3",
    ];

    return (
        <div style={{ overflowX: 'hidden', minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            
        </div>
    );
};

export default Fooldal;
