import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../src/css/Signup.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [ssn, setSsn] = useState('');
    const [motherName, setMotherName] = useState('');
    const [birthName, setBirthName] = useState('');
    const [birthDate, setBirthDate] = useState(Date().now);
    const [illness, setIllness] = useState([]);
    const navigate = useNavigate();

    const handleSubmit =  (e) => {
        e.preventDefault();

        const regisztral = async () => {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, phone, gender, address, ssn, motherName, birthName, birthDate, illness }),
            });
            
            const result = await response.json();

            console.log(result);
                
                if (response.ok) {
                    alert('Sikeres regisztráció!');
                    navigate('/login');
                } else {
                    alert(result.msg);
                }
        };

        regisztral();
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
