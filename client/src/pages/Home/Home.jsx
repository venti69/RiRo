// import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Üdvözöljük a Modern Kórházi Felületünkön</h1>
                <p className={styles.text}>Digitális egészségügy, ahogy megálmodtuk.</p>
                <div className={styles.buttons}>
                    <Link to="/login" className={styles.primaryButton}>
                        <span className={styles.icon}>🔑</span> Már tag? Belépés
                    </Link>
                    <Link to="/register" className={styles.secondaryButton}>
                        <span className={styles.icon}>📝</span> Új felhasználó? Regisztráció
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
