import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BelepContext from './Helpers/LoginContext';
import'../src/css/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { setIsLogged, setIsAdmin } = useContext(BelepContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3001/login', { email, password })
            .then((result) => {
                const employee = result.data;
                console.log(employee);
                window.alert('SIKERES BELÉPÉS')
                        setIsLogged(true);
                        setIsAdmin(employee.isAdmin);
                navigate('/fooldal');
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Bejelentkezés</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Add meg az e-mail címed"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Jelszó</label>
                        <input
                            type="password"
                            placeholder="Írd be a jelszavad"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-primary">
                        Bejelentkezés
                    </button>
                </form>
                <p className="register-text">
                    Nincs még fiókod?{' '}
                    <Link to="/register" className="register-link">
                        Regisztrálj most!
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
