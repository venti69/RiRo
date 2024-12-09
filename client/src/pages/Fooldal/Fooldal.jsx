import React from 'react';
import NewsCarousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import '../../css/images.css';
import Romeo from '../../assets/images/Romeo.jpg';
import Ricsi from '../../assets/images/Ricsi.jpg';
import Bodrogi from '../../assets/images/Bodrogi.jpg';
import bgi from '../Home/bg/bgi.jpg';


const Fooldal = () => {
    const slides = [
        "https://via.placeholder.com/1200x500/FF5733/ffffff?text=Slide+1",
        "https://via.placeholder.com/1200x500/33FF57/ffffff?text=Slide+2",
        "https://via.placeholder.com/1200x500/3357FF/ffffff?text=Slide+3",
    ];

    return (
        <div style={{ overflowX: 'hidden', minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            <NewsCarousel />
            
            {/* Hero szekció */}
            <section style={{
                background: 'linear-gradient(90deg, rgba(110, 57, 12, 0.586), rgba(57, 57, 57, 0.533))',
                color: "white",
                padding: "100px 20px",
                textAlign: "center",
                animation: "fadeIn 1s ease-in-out"
            }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
                    Üdvözlünk a RiRo Kórházban
                </h1>
                <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
                    Egy hely, ahol az egészségügyi szakértelem találkozik a legújabb technológiával. Célunk, hogy pácienseinknek a lehető legjobb ellátást nyújtsuk egy modern és barátságos környezetben. 
                </p>
            </section>

            {/* Szolgáltatások szekció */}
            <section style={{ padding: "60px 20px", backgroundImage: "url('../Home/bg/bgi.jpg')" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", color: "#333" }}>
                        Szolgáltatásaink
                    </h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div style={{
                                background: "white",
                                padding: "20px",
                                borderRadius: "15px",
                                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.3s",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                                <img
                                src ={Romeo}
                                    alt="Diagnosztika"
                                    style={{ marginBottom: "20px", borderRadius: "50%" }}
                                />
                                <h5 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#005bea" }}>Diagnosztikai Vizsgálatok</h5>
                                <p style={{ fontSize: "1rem", color: "#666" }}>A legújabb technológiával pontos és gyors diagnosztikai megoldásokat kínálunk.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div style={{
                                background: "white",
                                padding: "20px",
                                borderRadius: "15px",
                                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.3s",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                                <img
                                    src={Ricsi}
                                    alt="Konzultáció"
                                    style={{ marginBottom: "20px", borderRadius: "50%" }}
                                />
                                <h5 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#00c6fb" }}>Diabetológiai Konzultáció</h5>
                                <p style={{ fontSize: "1rem", color: "#666" }}>Tapasztalt és együttérző szakorvosok állnak rendelkezésére.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div style={{
                                background: "white",
                                padding: "20px",
                                borderRadius: "15px",
                                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.3s",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                                <img
                                    src={Bodrogi}
                                    alt="Digitális Egészségügy"
                                    style={{ marginBottom: "20px", borderRadius: "50%" }}
                                />
                                <h5 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#28a745" }}>Digitális Egészségügy</h5>
                                <p style={{ fontSize: "1rem", color: "#666" }}>Hozzáférhető orvosi adatok, gyors időpontfoglalás, online rendszerek.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section style={{
                background: 'linear-gradient(90deg, rgba(110, 57, 12, 0.586), rgba(57, 57, 57, 0.533))',
                color: "white",
                textAlign: "center",
                padding: "40px 20px",
                marginTop: "40px"
            }}>
                <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>
                    Tegye meg az első lépést az egészsége érdekében!
                </h3>
                <Link to="/Info" style={{
                    display: "inline-block",
                    padding: "10px 30px",   
                    background: "#00c6fb",
                    color: "white",
                    borderRadius: "30px",
                    fontSize: "1rem",
                    textDecoration: "none",
                    transition: "background 0.3s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#007BFF"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#00c6fb"}>
                    Kapcsolatfelvétel
                </Link>
            </section>
        </div>
    );
};

export default Fooldal;
