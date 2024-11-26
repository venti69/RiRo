import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
// import Logout from './Logout';
import Fooldal from './pages/Fooldal/Fooldal';
import Info from './pages/Info/Info';

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
                {/* <Route
                    path="/logout"
                    element={<Logout />}
                /> */}
                <Route
                    path="/info"
                    element={<Info />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
