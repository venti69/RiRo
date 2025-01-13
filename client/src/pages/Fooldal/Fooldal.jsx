import React from 'react';
import NewsCarousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import '../../css/images.css';
import './Fooldal.css'; 
import Romeo from '../../assets/images/Romeo.jpg';
import Ricsi from '../../assets/images/Ricsi.jpg';
import Bodrogi from '../../assets/images/Bodrogi.jpg';

const Fooldal = () => {
    window.onload = function () {
        if (!sessionStorage.getItem('hasReloaded')) {
            sessionStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        }
    };

    return (
        <div style={{ overflowX: 'hidden', minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            <NewsCarousel />

            {/* Hero szekció */}
            <section className="hero-section">
                <h1>Üdvözlünk a RiRo Kórházban</h1>
                <p>
                    Egy hely, ahol az egészségügyi szakértelem találkozik a legújabb technológiával. Célunk, hogy pácienseinknek a lehető legjobb ellátást nyújtsuk egy modern és barátságos környezetben.
                </p>
            </section>

            {/* Szolgáltatások szekció */}
            <section className="services-section">
                <h2>Szolgáltatásaink</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <a href="/vizsgalat">
                            <div className="service-card">
                                <img src={Romeo} alt="Diagnosztika" />
                                <h5>Diagnosztikai Vizsgálatok</h5>
                                <p>A legújabb technológiával pontos és gyors diagnosztikai megoldásokat kínálunk.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="/diabetologia">
                            <div className="service-card">
                                <img src={Ricsi} alt="Konzultáció" />
                                <h5>Diabetológiai Konzultáció</h5>
                                <p>Tapasztalt és együttérző szakorvosok állnak rendelkezésére.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="/egeszseg">
                            <div className="service-card">
                                <img src={Bodrogi} alt="Digitális Egészségügy" />
                                <h5>Digitális Egészségügy</h5>
                                <p>Hozzáférhető orvosi adatok, gyors időpontfoglalás, online rendszerek.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="cta-section">
                <h3>Tegye meg az első lépést az egészsége érdekében!</h3>
                <Link to="/Info" className="cta-link">Kapcsolatfelvétel</Link>
            </section>
        </div>
    );
};

export default Fooldal;
