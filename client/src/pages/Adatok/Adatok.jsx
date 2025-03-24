import { useState, useEffect } from 'react';
import './Adatok.css';
import { useNavigate } from 'react-router-dom';

const Adatok = () => {
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [ssn, setSsn] = useState('');
    const [motherName, setMotherName] = useState('');
    const [birthName, setBirthName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [message, setMessage] = useState('');

    const [kezelesek, setKezelesek] = useState([]);
    const [filteredKezelesek, setFilteredKezelesek] = useState([]);

    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');
    const kiegeszit = async (e) => {
        e.preventDefault();

        // Ha van TAJ-szám, érvényesítjük
        if (ssn && !/^\d{3}-\d{3}-\d{3}$/.test(ssn)) {
            setMessage('Hibás TAJ-szám formátum! (123-456-789)');
            return;
        }

        // Ha van telefonszám, érvényesítjük
        if (phone && !/^\+36 \d{2} \d{3} \d{4}$/.test(phone) && !/^06 \d{2} \d{3} \d{4}$/.test(phone)) {
            setMessage('Hibás telefonszám formátum! (Pl. +36 20 123 4567)');
            return;
        }

        // Ha van születési név, érvényesítjük
        if (birthName && !birthName.match(/^[A-Za-zÀ-ž\s]+$/)) {
            setMessage('A születési név csak betűket tartalmazhat!');
            return;
        }

        // Ha van anyja neve, érvényesítjük
        if (motherName && !motherName.match(/^[A-Za-zÀ-ž\s]+$/)) {
            setMessage('Az anyja neve csak betűket tartalmazhat!');
            return;
        }

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
        const torlesKezeles = async (id) => {
            if (!id) {
                console.error("Hiba: A kezelés ID nincs megadva!");
                return;
            }
        
            const confirmDelete = window.confirm("Biztosan törölni szeretné ezt a kezelést?");
            if (!confirmDelete) {
                return; // Ha a felhasználó mégsem akarja törölni, kilépünk a függvényből
            }
        
            try {
                const response = await fetch(`http://localhost:3001/kezelesTorles/${id}`, {
                    method: 'DELETE',
                });
        
                if (response.ok) {
                    console.log("Sikeres törlés", response);
                    location.reload();
                } else {
                    console.error("Hiba a törlés során:", response.statusText);
                }
            } catch (error) {
                console.error("Hálózati hiba a törlés során:", error);
            }
        };
        
            useEffect(() => {
                // Kezelések lekérése a szerverről
                const fetchKezelesek = async () => {
                    try {
                        const response = await fetch('http://localhost:3001/kezelesFrontend'); // Cseréld ki a megfelelő API végpontra
                        if (!response.ok) throw new Error('Hiba a kezelések lekérdezésénél');
                        
                        const data = await response.json();
                        // console.log(data.kezelesek);
                        // console.log(userId);
                        setKezelesek(data);
                        
                        // Csak azokat a kezeléseket mutatjuk, amelyek a bejelentkezett userhez tartoznak
                        const userKezelesek = data.kezelesek.filter(kezeles => kezeles.paciens === userId);
                        setFilteredKezelesek(userKezelesek);
                    } catch (error) {
                        console.error('Hiba:', error);
                    }
                };
        
                fetchKezelesek();
            }, [userId]);

    return (
        <div className="signup-container">
            <div className="adatok-card">
                <h2 className="signup-title">Adatok felvétele</h2>
                <form onSubmit={kiegeszit}>
                    <div className="input-group">
                        <label htmlFor="phone">Telefonszám</label>
                        <input
                            type="text"
                            placeholder="+36 20 123 4567"
                            value={phone}
                            onChange={(e) => {
                                let value = e.target.value.replace(/\D/g, ''); // Csak számokat
                                if (value.startsWith('36')) value = '+' + value;
                                if (value.startsWith('06')) value = value;
                                if (value.length === 11) value = `${value.slice(0, 2)} ${value.slice(2, 4)} ${value.slice(4, 7)} ${value.slice(7)}`;
                                setPhone(value);
                            }}
                            style={{
                                border: phone && !/^\+36 \d{2} \d{3} \d{4}$/.test(phone) && !/^06 \d{2} \d{3} \d{4}$/.test(phone) ? "2px solid red" : "",
                            }}
                        />
                        {phone && !/^\+36 \d{2} \d{3} \d{4}$/.test(phone) && !/^06 \d{2} \d{3} \d{4}$/.test(phone) && (
                            <p style={{ color: "red", fontSize: "14px" }}>Hibás telefonszám formátum!</p>
                        )}
                    </div>

                    {/* SZÜLETÉSI NÉV */}
                    <div className="input-group">
                        <label htmlFor="birthName">Születési név</label>
                        <input
                            type="text"
                            placeholder="Add meg a születési neved (ha nem egyezik)"
                            value={birthName}
                            onChange={(e) => {
                                const value = e.target.value.replace(/[^A-Za-zÀ-ž\s]/g, '');
                                setBirthName(value);
                            }}
                        />
                    </div>

                    {/* NEM */}
                    <div className="input-group">
                        <label htmlFor="gender">Neme: </label>
                        <select onChange={(e) => setGender(e.target.value)}>
                            <option value="other">Egyéb</option>
                            <option value="male">Férfi</option>
                            <option value="female">Nő</option>
                        </select>
                    </div>

                    {/* LAKCÍM */}
                    <div className="input-group">
                        <label htmlFor="address">Lakcím</label>
                        <input
                            type="text"
                            placeholder="Add meg a lakcímed"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    {/* TAJ-SZÁM */}
                    <div className="input-group">
                        <label htmlFor="ssn">TAJ-szám</label>
                        <input
                            type="text"
                            placeholder="123-456-789"
                            value={ssn}
                            onChange={(e) => {
                                let value = e.target.value.replace(/\D/g, '');
                                if (value.length > 9) value = value.slice(0, 9);
                                let formattedValue = value.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1-$2-$3").replace(/-$/, "");
                                setSsn(formattedValue);
                            }}
                            style={{
                                border: ssn && !/^\d{3}-\d{3}-\d{3}$/.test(ssn) ? "2px solid red" : "",
                            }}
                        />
                        {ssn && !/^\d{3}-\d{3}-\d{3}$/.test(ssn) && (
                            <p style={{ color: "red", fontSize: "14px" }}>Érvénytelen TAJ-szám formátum!</p>
                        )}
                    </div>

                    {/* ANYJA NEVE */}
                    <div className="input-group">
                        <label htmlFor="motherName">Anyja neve</label>
                        <input
                            type="text"
                            placeholder="Adja meg az anyja nevét"
                            value={motherName}
                            onChange={(e) => {
                                const value = e.target.value.replace(/[^A-Za-zÀ-ž\s]/g, '');
                                setMotherName(value);
                            }}
                        />
                    </div>

                    {/* SZÜLETÉSI DÁTUM */}
                    <div className="input-group">
                        <label htmlFor="birthdate">Születési dátum</label>
                        <input
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            max={new Date().toISOString().split("T")[0]} // Ma a max
                        />
                    </div>

                    <button type="submit" className="btn-primary">
                        Adatok mentése
                    </button>
                </form>
                {message && <p>{message}</p>}
            </div>


            {/* <div className="kezelesDoboz" ></div> */}
            <div className="KezelesTarto">            
                <div className="kezelesek-container">
                    <div className="kezelesek-card"> 
                        <h1>Kezeléseim</h1>
                    </div>      
                </div>
                <div className="kartyak">
                    {filteredKezelesek.length > 0 ? (
                        filteredKezelesek.map((kezeles) => (
                            <div key={kezeles.id} className="kezeles-card">
                                <p><strong className='kicsiszoveg' style={{color: "#666666"}}>Orvos:</strong> {kezeles.orvos.nev}</p>
                                <p><strong className='kicsiszoveg' style={{color: "#666666"}}>Szakterület:</strong> {kezeles.orvos.szak}</p>
                                <p>
                                    <strong className='kicsiszoveg' style={{color: "#666666"}}>Időpont:</strong>{" "}
                                    {new Date(kezeles.idopont).toLocaleString("hu-HU", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    }).replace(",", "")}
                                </p>

                                <button onClick={() => torlesKezeles(kezeles._id)}>Időpont lemondás</button>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>Nem történt még jelentkezés.</p>
                            <button onClick={() => navigate('/orvosok')}>
                                Orvosok megtekintése
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Adatok;
