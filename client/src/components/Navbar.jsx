import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [admin, setAdmin] = useState(true);

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/register">Regisztráció</Link>
            <Link to="/login">Bejelentkezés</Link>
            {admin ? (
                <>
                    <Link to="http://localhost:3001">Szerver</Link>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Navbar;
