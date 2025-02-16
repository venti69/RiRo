const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const PatientModel = require('./models/Patient.js');
const app = express();
// const Patient = require('./models/Patient');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://asd:asd@teszt.63nge.mongodb.net/');
//FÁRADT VAGYOK, MAJD ÓRÁN
//https://www.youtube.com/watch?v=ZVyIIyZJutM    17:58a

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'Minden mezőt kötelező kitölteni' });
    }
    const regisztralt = await PatientModel.findOne({ email });
    if (regisztralt) {
        return res
            .status(401)
            .json({ msg: 'Ilyen adatokkal létezik felhasználó!' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
    // const newPatient = new PatientModel({ name, email, password });
    // console.log(newPatient);
    PatientModel.create({ name: name, email: email, password: hashedPassword })
        .then((patients) => res.json(patients))
        .catch((err) => res.json(err));
});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Felhasználó keresése email alapján
        const user = await PatientModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ msg: 'Sikertelen bejelentkezés: Felhasználó nem található.' });
        }
        // Jelszó ellenőrzése
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(403).json({ msg: 'Sikertelen bejelentkezés: Hibás jelszó.' });
        }
        // Sikeres bejelentkezés
        res.status(200).json({
            loggedIn: true,
            isAdmin: user.isAdmin,
            userId: user._id, // Felhasználó azonosítója
            user,
            msg: 'Sikeres bejelentkezés',
        });
    } catch (err) {
        res.status(500).json({ msg: 'Hiba történt a bejelentkezés során.', error: err.message });
    }
});

// const serverRoutes = require('./server.js');
// app.get('/server', serverRoutes);

app.listen(3001, () => {
    console.log('Fut a szerver. http://localhost:3001/server');
});

app.get('/server', (req, res) => {
    try {
        res.status(200).render('index.ejs');
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});
app.get('/', (req, res) => {
    try {
        res.status(200).render('Home.jsx');
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});
app.post('/users/:id/edit', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    // Adatok frissítése az adatbázisban
    UserModel.updateOne({ _id: id }, { name, email })
        .then(() => res.json({ success: true }))
        .catch((err) =>
            res.status(500).json({ success: false, error: err.message })
        );
});

// app.use('/idopont', require('./routes/idopontokRoutes.js'))
// app.use('/idopontmodositas', require('./routes/idopontmodositasRoutes.js'))

app.use('/doctors', require('./routes/doctorsRoutes.js'));
app.use('/doctorsfrontend', require('./routes/doctorsFrontendRoutes.js'));
app.use('/torold', require('./routes/doctorsTorolRoute.js'));

// app.use('/patient', require('./routes/patientRoutes.js'));

app.use('/adatok', require('./routes/adatokRoutes.js'));

app.use('/patient', require('./routes/patientRoutes.js'));
app.use('/update', require('./routes/updatePatientRoutes.js'));
app.use('/patientmodositas', require('./routes/patientModositasRoutes.js'));
app.use('/torol', require('./routes/torlPatientRoute.js'));

app.use('/kezeles', require('./routes/kezelesRoutes.js'))
app.use('/kezelesFrontend', require('./routes/kezelesFrontendRoutes'));
app.use('/torolk', require('./routes/kezelesRoutes.js'));
app.use('/kezelesTorles', require('./routes/kezelesTorlesRoutes.js'));