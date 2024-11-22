import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LoginContext } from '../Helpers/Context.js';
import '../css/Navbar.css';

const Navbar = () => {
    // const { admin, loggedIn, setLoggedIn } = useContext(LoginContext);

    const loggedIn = Boolean(+localStorage.getItem('isLoggedIn'));
    const admin = Boolean(+localStorage.getItem('isAdmin'));

    // const loggedIn = false;
    // const admin = false;

    return (
        <nav className="navbar">
            <div className="brand">Elmegyógy Kórház</div>
            <div className="nav-links">
                <NavLink to="/home">Főoldal</NavLink>
                {loggedIn ? (
                    <NavLink to="/logout">Kilépés</NavLink>
                ) : (
                    <>
                        <NavLink to="/register">Regisztráció</NavLink>
                        <NavLink to="/login">Bejelentkezés</NavLink>
                    </>
                )}
                {admin && (
                    <NavLink to="http://localhost:3001/server">
                        Szerver
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
