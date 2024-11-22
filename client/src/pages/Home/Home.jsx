import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Üdvözöljük a Kórház Felületünkön</h1>
            <p>Ha már tag, lépjen be:</p>
            <Link to="/login" className="btn">Belépés</Link>
            <p>Ha még nem tag, regisztráljon:</p>
            <Link to="/register" className="btn">Regisztráció</Link>
        </div>
    );
};

export default Home;
