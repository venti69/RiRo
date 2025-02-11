import React, { useEffect, useState } from 'react';
import NewsCarousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import '../../css/images.css';
import './Fooldal.css'; 
import Romeo from '../../assets/images/Romeo.jpg';
import Ricsi from '../../assets/images/Ricsi.jpg';
import Bodrogi from '../../assets/images/Bodrogi.jpg';

const Fooldal = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ overflowX: 'hidden', minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            {loading && (
                <div id="loader" className="loader-container">
                    <div className="loader">
                        Loading
                        <span></span>
                    </div>
                </div>
            )}

            {!loading && (
                <>
                    <NewsCarousel />

                    <section className="hero-section">
                        <h1>Üdvözlünk a RiRo Kórházban</h1>
                        <p>
                            Egy hely, ahol az egészségügyi szakértelem találkozik a legújabb technológiával. Célunk, hogy pácienseinknek a lehető legjobb ellátást nyújtsuk egy modern és barátságos környezetben.
                        </p>
                    </section>

                    <section className="services-section">
                        <h2>Szolgáltatásaink</h2>
                        <div className="services-container">
                            <a href="/vizsgalat" className="service-card">
                                <img src={Romeo} alt="Diagnosztika" className="service-image" />
                                <h5>Diagnosztikai Vizsgálatok</h5>
                                <p>Pontos és gyors diagnosztikai megoldásokat kínálunk.</p>
                                <p style={{fontSize: "10px"}}> &copy; RicsiBuzi</p>
                            </a>
                            <a href="/diabetologia" className="service-card">
                                <img src={Ricsi} alt="Konzultáció" className="service-image" />
                                <h5>Diabetológiai Konzultáció</h5>
                                <p>Tapasztalt és együttérző szakorvosok állnak rendelkezésére.</p>
                                <p style={{fontSize: "10px"}}> &copy; RómeóBuzi</p>

                            </a>
                            <a href="/egeszseg" className="service-card">
                                <img src={Bodrogi} alt="Digitális Egészségügy" className="service-image" />
                                <h5>Digitális Egészségügy</h5>
                                <p>Hozzáférhető orvosi adatok, gyors időpontfoglalás, online rendszerek. Digitális Egészségügy.</p>
                                <p style={{fontSize: "10px"}}> &copy; Mind a kettő Buzi</p>

                            </a>
                        </div>
                    </section>

                    <section className="cta-section">
                        <h3>Tegye meg az első lépést az egészsége érdekében!</h3>
                        <Link to="/Info" className="cta-link">Kapcsolatfelvétel</Link>
                    </section>
                </>
            )}
        </div>
    );
};

export default Fooldal;
