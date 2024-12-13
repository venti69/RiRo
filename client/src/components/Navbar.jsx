import { useContext, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import BelepContext from '../Helpers/LoginContext.jsx';


const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [admin, setAdmin] = useState(false);
    const { getIsLogged, setIsLogged, getIsAdmin, setIsAdmin } =
    useContext(BelepContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        setLoggedIn(getIsLogged());
        setAdmin(getIsAdmin());
    }, []);
    
    const kilep = () => {
        setIsLogged(false);
        setLoggedIn(false);
        setIsAdmin(false);
        setAdmin(false);
        navigate('/');
    };
    
    return (
        <nav className="navbar">
            <div className="brand">RiRo-Kórház</div>
            <div className="nav-links">
                <NavLink to="/fooldal">Főoldal</NavLink>
                {loggedIn ? (
                    <>
                        <NavLink to="/info">Információ</NavLink>
                        <NavLink to="/idopont">Időpontfoglalás</NavLink>
                        <NavLink to="/orvosok">Orvosok</NavLink>
                        <NavLink to="/adatok">Adatok</NavLink>
                    <button onClick={kilep} className="kilepes" style={{
                        backgroundColor: isHovered ? "#696b6ca5" : "transparent", // Hover szín
                        fontWeight: "bold",
                        border: "none",
                        color: isHovered ? "black": "white",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",}} onMouseEnter={() => setIsHovered(true)}
                         // Hover állapot kezdete

                        onMouseLeave={() => setIsHovered(false)}>Kilépés</button>
                        </>
                ) : (
                    <>
                        <NavLink to="/register">Regisztráció</NavLink>
                        <NavLink to="/login">Bejelentkezés</NavLink>

                    </>
                )}
                {admin && (
                    <NavLink to="http://localhost:3001/server">Szerver</NavLink>
                )}

            </div>
        </nav>
    );
};

export default Navbar;
