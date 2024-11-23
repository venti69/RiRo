import { useContext, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3001/register', {
                name,
                email,
                password,
            })
            .then((result) => {
                console.log(result);
                navigate('/login');
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Regisztráció</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Név</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Név"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email cím</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Email cím"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Jelszó</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Jelszó"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-succes border w-100 rounded-0"
                    >
                        Regisztráció
                    </button>
                </form>
                <p>Van már fiókja?</p>
                <Link
                    to="/login"
                    className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                >
                    Bejelentkezés
                </Link>
            </div>
        </div>
    );
}

export default Signup;
