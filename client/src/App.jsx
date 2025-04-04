import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Fooldal from './pages/Fooldal/Fooldal';
import Info from './pages/Info/Info';
import Idopont from './pages/Idopont/Idopont';
import Orvosok from './pages/Orvosok/Orvosok';
import Adatok from './pages/Adatok/Adatok';
import Egeszseg from './pages/Egeszseg/Egeszseg';
import Vizsgalat from './pages/Vizsgalat/Vizsgalat';
import Diabetologia from './pages/Diabetologia/Diabetologia';
import Gyik from './pages/Gyik/Gyik';
import Arak from './pages/Swiper/Arak';
import Profile from './pages/Profil/Profil';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/fooldal"
                    element={<Fooldal />}
                />
                <Route
                    path="/register"
                    element={<Signup />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/info"
                    element={<Info />}
                />
                <Route
                    path="/idopont"
                    element={<Idopont />}
                />
                <Route
                    path="/orvosok"
                    element={<Orvosok />}
                />
                <Route
                    path="/adatok"
                    element={<Adatok />}
                />
                <Route
                    path='/egeszseg'
                    element={<Egeszseg/>}
                />
                <Route 
                path='/vizsgalat'
                element={<Vizsgalat/>}
                />
                <Route 
                path='/diabetologia'
                element={<Diabetologia/>}
                />
                <Route path='/gyik'
                element={<Gyik/>}
                />
                <Route path='/arak'
                element={<Arak/>}
                />
                 <Route 
                    path="/profil" 
                    element={<Profile />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
