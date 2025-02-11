import { useState, useEffect } from "react";
import "./Adatok.css";
import { useNavigate } from "react-router-dom";

const Adatok = () => {
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [ssn, setSsn] = useState("");
    const [motherName, setMotherName] = useState("");
    const [birthName, setBirthName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [message, setMessage] = useState("");
    const [kezelesek, setKezelesek] = useState([]);
    const [filteredKezelesek, setFilteredKezelesek] = useState([]);

    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchKezelesek = async () => {
            try {
                const response = await fetch("http://localhost:3001/kezelesFrontend");
                if (!response.ok) throw new Error("Hiba a kezelések lekérdezésénél");

                const data = await response.json();
                setKezelesek(data.kezelesek || []);

                const userKezelesek = (data.kezelesek || []).filter(
                    (kezeles) => kezeles.paciens === userId
                );
                setFilteredKezelesek(userKezelesek);
            } catch (error) {
                console.error("Hiba:", error);
            }
        };

        if (userId) {
            fetchKezelesek();
        }
    }, [userId]);

    const torles = async (kezelesId) => {
        if (!kezelesId) {
            console.error("Hiba: nincs megadva kezelés ID");
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/kezelesTorles/${kezelesId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setFilteredKezelesek((prev) => prev.filter((kezeles) => kezeles.id !== kezelesId));
            } else {
                console.error("Hiba a törlés során: Nem sikerült a DELETE kérés.");
            }
        } catch (error) {
            console.error("Hálózati hiba:", error);
        }
    };

    return (
        <div className="signup-container">
            <div className="adatok-card">
                <h2 className="signup-title">Adatok felvétele</h2>

                {/* FORM */}
                <form>
                    <div className="input-group">
                        <label htmlFor="phone">Telefonszám</label>
                        <input
                            type="text"
                            placeholder="+36 20 123 4567"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="birthName">Születési név</label>
                        <input
                            type="text"
                            placeholder="Add meg a születési neved"
                            value={birthName}
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
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-primary">
                        Adatok mentése
                    </button>
                </form>
                {message && <p>{message}</p>}
            </div>

            {/* Kezelések kártyák */}
            <div className="KezelesTarto">
                <div className="kezelesek-container">
                    <div className="kezelesek-card">
                        <h1>Kezelések</h1>
                    </div>
                </div>
                <div className="kartyak">
                    {filteredKezelesek.length > 0 ? (
                        filteredKezelesek.map((kezeles) => (
                            <div key={kezeles.id} className="kezeles-card">
                                <p>
                                    <strong className="kicsiszoveg" style={{ color: "#666666" }}>
                                        Orvos:
                                    </strong>{" "}
                                    {kezeles.orvos.nev}
                                </p>
                                <p>
                                    <strong className="kicsiszoveg" style={{ color: "#666666" }}>
                                        Időpont:
                                    </strong>{" "}
                                    {kezeles.idopont}
                                </p>
                                <button onClick={() => torles(kezeles.id)}>Törlés</button>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>Nincs még kezelésed.</p>
                            <button onClick={() => navigate("/orvosok")}>Orvosok megtekintése</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Adatok;
