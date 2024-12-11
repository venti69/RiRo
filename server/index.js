const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const EmployeeModel = require('./models/Employee');
const app = express();
const Patient = require('./models/Patient');

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
    const regisztralt = await EmployeeModel.findOne({ email });
    if (regisztralt) {
        return res
            .status(401)
            .json({ msg: 'Ilyen adatokkal létezik felhasználó!' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;

    EmployeeModel.create({ name: name, email: email, password: hashedPassword })
        .then((employees) => res.json(employees))
        .catch((err) => res.json(err));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    EmployeeModel.find({})
        .then((employees) => {
            const user = employees.find((employee) => employee.email === email);
            if (bcrypt.compare(password, user.password)) {
                res.status(200).json({
                    loggedIn: true,
                    isAdmin: user.isAdmin,
                    msg: 'Sikeres bejelentkezés',
                });
            } else {
                res.status(403).json({
                    loggedIn: false,
                    msg: 'Sikertelen bejelentkezés',
                });
            }
        })
        .catch((err) => res.json(err));
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
    EmployeeModel.updateOne({ _id: id }, { name, email })
        .then(() => res.json({ success: true }))
        .catch((err) =>
            res.status(500).json({ success: false, error: err.message })
        );
});



app.use('/torol', require('./routes/torlUsersRoute.js'));
app.use('/idopont', require('./routes/idopontokRoutes.js'))


app.use('/doctors', require('./routes/doctorsRoutes.js'));

app.use('/patient', require('./routes/patientRoutes.js'));

app.use('/users', require('./routes/usersRoutes.js'));
app.use('/update', require('./routes/updateRoutes.js'));
