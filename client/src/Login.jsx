import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from './Helpers/Context';

function Login() {
    const { admin, setAdmin } = useContext(LoginContext);
    const { loggedIn, setLoggedIn } = useContext(LoginContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3001/login', { email, password: password })
            .then((result) => {
                const employees = result.data;

                for (let i = 0; i < employees.length; i++) {
                    if (
                        employees[i].email === email &&
                        employees[i].password === password &&
                        employees[i].isAdmin === true
                    ) {
                        setAdmin(true);
                        setLoggedIn(true);
                    } else if (
                        employees[i].email === email &&
                        employees[i].password === password &&
                        employees[i].isAdmin === false
                    ) {
                        setLoggedIn(true);
                    }
                }

                navigate('/home');
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p3 rounded w-25">
                <h2>Bejelentkezés</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            className="form-control rounded-0"
                            autoComplete="off"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Jelszó</strong>
                        </label>
                        <input
                            type="password"
                            className="form-control rounded-0"
                            name="password"
                            placeholder="Jelszó"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-succes w-100 rounded-0"
                    >
                        Bejelentkezés
                    </button>
                </form>
                <p>Nincs még fiókja?</p>
                <Link
                    to="/register"
                    className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                >
                    Regisztrálás
                </Link>
            </div>
        </div>
    );
}
export default Login;
