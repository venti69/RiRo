import { useContext, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import BelepContext from '../Helpers/LoginContext.jsx';

const Navbar = () => {
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
            <div className="brand">Elmegyógy Kórház</div>
            <div className="nav-links">
                <NavLink to="/fooldal">Főoldal</NavLink>
                {loggedIn ? (
                    <button onClick={kilep}>Kilépés</button>
                ) : (
                    // <NavLink to="/logout">Kilépés</NavLink>
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
