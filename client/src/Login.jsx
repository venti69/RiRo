import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BelepContext from './Helpers/LoginContext';
import '../src/css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { setIsLogged, setIsAdmin } = useContext(BelepContext);

    const successNotify = () => toast.success("Sikeres bejelentkezés!");
    const errorNotify = (message) => toast.error(message || "Minden mező kitöltése kötelező!");


    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!email.trim() || !password.trim()) {
            errorNotify("Minden mező kitöltése kötelező!");
            return;
        }
    
        axios
            .post('http://localhost:3001/login', { email, password })
            .then((result) => {
                const user = result.data;
                console.log(user);
    
                if (user.loggedIn) {
                    localStorage.setItem('userId', user.userId);
                    localStorage.setItem('user', JSON.stringify(user.user));
    
                    setIsLogged(true);
                    setIsAdmin(user.isAdmin);
    
                    successNotify();
                    setTimeout(() => {
                        navigate('/fooldal');
                        window.location.reload();
                    }, 1500);
                } else {
                    if (user.msg === "Nincs ilyen felhasználó") {
                        errorNotify("Nincs ilyen felhasználó, ellenőrizd az email címet!");
                    } else {
                        errorNotify(user.msg);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                errorNotify("Hiba történt a bejelentkezés során.");
            });
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
                        Bejelentkezés
                    </button>
                </form>
                <ToastContainer />
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
