import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../Helpers/Context.js';

const Navbar = () => {
    const { admin, setAdmin } = useContext(LoginContext);
    const { loggedIn, setLoggedIn } = useContext(LoginContext);

    return (
        <div>
            <Link to="/">Home</Link>
            {loggedIn ? (
                <>
                    <Link to="/logout">Kilépés</Link>
                </>
            ) : (
                <>
                    <Link to="/register">Regisztráció</Link>
                    <Link to="/login">Bejelentkezés</Link>
                </>
            )}
            {admin ? (
                <>
                    <Link to="http://localhost:3001/server">Szerver</Link>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Navbar;
