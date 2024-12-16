import {useState} from 'react';
import NewsCarousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import '../../css/images.css';
import Romeo from '../../assets/images/Romeo.jpg';
import Ricsi from '../../assets/images/Ricsi.jpg';
import Bodrogi from '../../assets/images/Bodrogi.jpg';
import bgi from '../Home/bg/bgi.jpg';


const Adatok = () => {

    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [ssn, setSsn] = useState('');
    const [motherName, setMotherName] = useState('');
    const [birthName, setBirthName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [illness, setIllness] = useState([]);

    const kiegeszit = async () => {
        const response = await fetch('https://localhost:3001/adatok', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({phone, gender, address, ssn, motherName, birthName, birthDate, illness}),
        });
     };

    return (
        <div style={{ overflowX: 'hidden', minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            <br />
            <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Regisztráció</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="phone">Telefonszám</label>
                        <input
                            type="text"
                            placeholder="Add meg a telefonszámod"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="birthName">Születés neve</label>
                        <input
                            type="text"
                            placeholder="Add meg a születés neved"
                            onChange={(e) => setBirth(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="gender">Neme: </label>
                        <select name="" id="" onChange={(e) => setPassword(e.target.value)}>
                            <option value="other">Egyéb</option>
                            <option value="male">Férfi</option>
                            <option value="female">Nő</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Lakcím</label>
                        <input
                            type="text"
                            placeholder="Add meg a lakcímed"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="ssn">Taj-szám</label>
                        <input
                            type="number"
                            placeholder="Add meg a Taj-számod"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="motherName">Anyja neve</label>
                        <input
                            type="text"
                            placeholder="Adja meg az anyja nevét"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="birthDate">Születés dátum</label>
                        <input
                            type="date"
                            placeholder="Add meg a nemed"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-primary" onClick={kiegeszit}>
                        Adatok mentése
                    </button>
                </form>
                
            </div>
        </div>
        </div>
    );
};

export default Adatok;
