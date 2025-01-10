import { useState } from 'react';
import '../../css/Adatok.css';

const Adatok = () => {
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [ssn, setSsn] = useState('');
    const [motherName, setMotherName] = useState('');
    const [birthName, setBirthName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [message, setMessage] = useState('');

    const kiegeszit = async (e) => {
        e.preventDefault(); // Megakadályozza az oldal újratöltését

        const userId = localStorage.getItem('userId'); // Feltételezzük, hogy a felhasználó azonosítója a localStorage-ben van
        if (!userId) {
            setMessage('Felhasználói azonosító nem található.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/adatok/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone,
                    gender,
                    address,
                    ssn,
                    motherName,
                    birthName,
                    birthDate,
                }),
            });

            if (response.ok) {
                setMessage('Adatok sikeresen frissítve!');
            } else {
                const errorData = await response.json();
                setMessage(`Hiba történt: ${errorData.message}`);
            }
        } catch (error) {
            setMessage(`Hálózati hiba: ${error.message}`);
        }
    };

    const handleDateChange = (e) => {
        const rawDate = e.target.value; // Formátum: yyyy-MM-dd
        if (isValidDate(rawDate)) {
            const formattedDate = formatDate(rawDate); // Átalakítás: yyyy. mm. dd.
            setBirthDate(formattedDate);
        } else {
            setBirthDate(''); // Ha érvénytelen, töröljük az értéket
        }
    };

    // Érvényes dátum ellenőrzése
    const isValidDate = (date) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Ellenőrizzük, hogy yyyy-MM-dd formátum
        if (!dateRegex.test(date)) return false;

        const [year, month, day] = date.split('-').map(Number);
        const testDate = new Date(year, month - 1, day); // Létrehozunk egy JS dátumot
        return (
            testDate.getFullYear() === year &&
            testDate.getMonth() === month - 1 &&
            testDate.getDate() === day
        );
    };

    // Dátum formázása
    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${year}. ${month}. ${day}.`;
    };

    return (
        <div style={{ overflowX: 'hidden', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <br />
            <div className="signup-container">
                <div className="signup-card">
                    <h2 className="signup-title">Adatok felvétele</h2>
                    <form onSubmit={kiegeszit}>
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
                                onChange={(e) => setBirthName(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="gender">Neme: </label>
                            <select onChange={(e) => setGender(e.target.value)}>
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
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="ssn">Taj-szám</label>
                            <input
                                type="number"
                                placeholder="Add meg a Taj-számod"
                                onChange={(e) => setSsn(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="motherName">Anyja neve</label>
                            <input
                                type="text"
                                placeholder="Adja meg az anyja nevét"
                                onChange={(e) => setMotherName(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
  <label htmlFor="birthdate">Születési dátum</label>
  <input
    type="date"
    id="birthdate"
    name="birthdate"
    required
    max="2025-01-10" // Ma legyen a maximum
    className="date-input"
  />
</div>
                        <button type="submit" className="btn-primary">
                            Adatok mentése
                        </button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default Adatok;
