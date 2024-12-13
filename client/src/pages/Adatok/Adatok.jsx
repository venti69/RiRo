import React from 'react';
import NewsCarousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import '../../css/images.css';
import Romeo from '../../assets/images/Romeo.jpg';
import Ricsi from '../../assets/images/Ricsi.jpg';
import Bodrogi from '../../assets/images/Bodrogi.jpg';
import bgi from '../Home/bg/bgi.jpg';


const Adatok = () => {

    return (
        <div style={{ overflowX: 'hidden', minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            
            <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Regisztráció</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="name">Telefonszám</label>
                        <input
                            type="text"
                            placeholder="Add meg a telefonszámod"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Születés neve</label>
                        <input
                            type="email"
                            placeholder="Add meg a születés neved"
                            onChange={(e) => setBirth(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Neme</label>
                        <select name="" id="" onChange={(e) => setPassword(e.target.value)}>
                            <option value="male">Férfi</option>
                            <option value="female">Nő</option>
                            <option value="other">Egyéb</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Lakcím</label>
                        <input
                            type="text"
                            placeholder="Add meg a lakcímed"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Taj-szám</label>
                        <input
                            type="text"
                            placeholder="Add meg a Taj-számod"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Anyja neve</label>
                        <input
                            type="text"
                            placeholder="Adja meg az anyja nevét"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Születés dátum</label>
                        <input
                            type="date"
                            placeholder="Add meg a nemed"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>
                
            </div>
        </div>
        </div>
    );
};

export default Adatok;
