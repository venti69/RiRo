import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../src/css/Signup.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3001/register', { name, email, password })
            .then((result) => {
                console.log(result);
                navigate('/login');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Regisztráció</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Név</label>
                        <input
                            type="text"
                            placeholder="Add meg a neved"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email cím</label>
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
                        Regisztráció
                    </button>
                </form>
                <p className="login-text">
                    Van már fiókod?{' '}
                    <Link to="/login" className="login-link">
                        Jelentkezz be!
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
