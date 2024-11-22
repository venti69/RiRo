import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import { LoginContext } from './Helpers/Context';
import Logout from './Logout';
import Fooldal from './pages/Fooldal/Fooldal';

function App() {
    const [admin, setAdmin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <LoginContext.Provider
            value={{ admin, setAdmin, loggedIn, setLoggedIn }}
        >
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Fooldal />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </LoginContext.Provider>
    );
}

export default App;
