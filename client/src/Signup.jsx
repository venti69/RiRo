import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../src/css/Signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const successNotify = () => toast.success("Sikeres regisztráció!");
    const errorNotify = (message) => toast.error(message || "Minden mező kitöltése kötelező!");

    const handleSubmit = (e) => {
        e.preventDefault();

        const regisztral = async () => {
            try {
                const response = await fetch('http://localhost:3001/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                });

                const result = await response.json();

                if (response.ok) {
                    successNotify();
                    setTimeout(() => navigate('/login'), 1500);
                } else {
                    errorNotify(result.msg);
                }
            } catch (error) {
                errorNotify("Hálózati hiba történt, próbáld újra később!");
            }
        };

        regisztral();
    };

    return (
        <div className="signup-container">
            <div className="signup-card" style={{textAlign: "center"}}>
                <h2 className="signup-title">Regisztráció</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Név</label>
                        <input
                            type="text"
                            placeholder="Add meg a teljes neved"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email cím</label>
                        <input
                            type="email"
                            placeholder="Add meg az e-mail címed"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Jelszó</label>
                        <input
                            type="password"
                            placeholder="Írd be a jelszavad"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-primary">
                        Regisztráció
                    </button>
                   <ToastContainer />
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
