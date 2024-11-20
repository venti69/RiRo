const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
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

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then((employees) => res.json(employees))
        .catch((err) => res.json(err));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    EmployeeModel.find({})
        .then((employees) => res.json(employees))
        .catch((err) => res.json(err));
});

// const serverRoutes = require('./server.js');

// app.get('/server', serverRoutes);

app.listen(3001, () => {
    console.log('Fut a szerver');
});

app.get('/', (req, res) => {
    try {
        res.status(200).render( "index.ejs" );
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});
// app.use('/', require('./routes/mainRoutes.js'));

//Időpontok
/* 
app.use('/api/hospital/appointment', require('./routes/appointmentRoutes.js'));
app.use('/api/hospital/appointments', require('./routes/idopontokRoutes.js'));
app.use('/api/hospital/appointments/add', require('./routes/addIdopontRoutes.js'));
app.use('/api/hospital/appointments/delete', require('./routes/torIdopontRoutes.js'));
app.use('/api/hospital/appointments/update', require('./routes/upIdopontRoutes.js'));
app.use('/api/hospital/idopontok', require('./routes/appointmentCardRoutes.js'));*/
// Orvosok


app.use('/doctors', require('./routes/doctorsRoutes.js'));

app.use('/api/hospital/orvosok', require('./routes/orvosokRoutes.js'));
// app.use('/api/hospital/appointments/add', require('./routes/addIdopontRoutes.js'));
// Páciensek betegek
app.use('/patient', require('./routes/patientRoutes.js'));
// Egyedi
app.use('/api/hospital/egyedi', require('./routes/egyediOrvosRoutes.js'));
// Users
// app.use('/api/hospital/users', require('./routes/usersRoutes.js'));

