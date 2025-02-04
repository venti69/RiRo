import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useContext, useState, useEffect } from 'react';
import BelepContext from '../../Helpers/LoginContext';


const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const { getIsLogged, setIsLogged } = useContext(BelepContext);

    useEffect(() => {
        setLoggedIn(getIsLogged());
    }, []);

    const kilep = () => {
        setIsLogged(false);
        window.location.replace('/');
    };
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    Üdvözöljük a Modern Kórházi Felületünkön
                </h1>
                <p className={styles.text}>
                <p style={{textAlign:"center"}}>Digitális egészségügy, ahogy megálmodtuk.</p>
                </p>
                {loggedIn ? (
                    <></>
                ) : (
                    <>
                        <div className={styles.buttons}>
                            <Link
                                to="/login"
                                className={styles.primaryButton}
                            >
                                <span className={styles.icon}>🔑</span> Már tag?
                                Belépés
                            </Link>
                            <Link
                                to="/register"
                                className={styles.secondaryButton}
                            >
                                <span className={styles.icon}>📝</span> Új
                                felhasználó? Regisztráció
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
