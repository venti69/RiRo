import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LoginContext } from '../Helpers/Context.js';
import './Navbar.css';

const Navbar = () => {
    const { admin, loggedIn } = useContext(LoginContext);

    return (
        <nav className="navbar">
            <div className="brand">MyWebsite</div>
            <div className="nav-links">
                <NavLink to="/home" exact activeClassName="active">Home</NavLink>
                {loggedIn ? (
                    <NavLink to="/logout" activeClassName="active">Kilépés</NavLink>
                ) : (
                    <>
                        <NavLink to="/register" activeClassName="active">Regisztráció</NavLink>
                        <NavLink to="/login" activeClassName="active">Bejelentkezés</NavLink>
                    </>
                )}
                {admin && (
                    <NavLink to="http://localhost:3001/server" activeClassName="active">
                        Szerver
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
