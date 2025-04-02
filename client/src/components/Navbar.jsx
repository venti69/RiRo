import { useContext, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import BelepContext from '../Helpers/LoginContext.jsx';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { getIsLogged, setIsLogged, getIsAdmin, setIsAdmin } = useContext(BelepContext);
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
            <div className="brand"><NavLink to="/fooldal">RiRo-Kórház</NavLink></div>
            
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/fooldal" onClick={() => setMenuOpen(false)}>Főoldal</NavLink>
                {loggedIn ? (
                    <>
                        <NavLink to="/info" onClick={() => setMenuOpen(false)}>Információ</NavLink>
                        <NavLink to="/orvosok" onClick={() => setMenuOpen(false)}>Orvosok</NavLink>
                        <NavLink to="/adatok" onClick={() => setMenuOpen(false)}>Adatok</NavLink>
                        <NavLink to="/gyik" onClick={() => setMenuOpen(false)}>GYIK</NavLink>
                        <NavLink to="/arak" onClick={() => setMenuOpen(false)}>Árak/Vizsgálatok</NavLink>
                        <NavLink to="/profil" onClick={() => setMenuOpen(false)}>Profil</NavLink>
                        
                        <button 
                            onClick={kilep} 
                            className="kilepes" 
                            style={{
                                backgroundColor: isHovered ? "#696b6ca5" : "transparent",
                                fontWeight: "bold",
                                border: "none",
                                color: isHovered ? "black" : "white",
                                borderRadius: "5px",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                            }} 
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Kilépés
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink to="/register" onClick={() => setMenuOpen(false)}>Regisztráció</NavLink>
                        <NavLink to="/login" onClick={() => setMenuOpen(false)}>Bejelentkezés</NavLink>
                    </>
                )}
                {admin && (
                    <NavLink to="http://localhost:3001/server" onClick={() => setMenuOpen(false)}>Szerver</NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
