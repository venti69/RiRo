import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Üdvözöljük a Kórház felületünkön</h1>
            <p>
                Ha már tag lépjen be: <Link to="/login">Belépés</Link>{' '}
            </p>
            <p>
                Ha még nem tag regisztráljon:{' '}
                <Link to="/register">Regisztráció</Link>
            </p>
        </div>
    );
};

export default Home;
