const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://asd:asd@teszt.63nge.mongodb.net/')

//FÁRADT VAGYOK, MAJD ÓRÁN
//https://www.youtube.com/watch?v=ZVyIIyZJutM    17:58a

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body).then(employees => res.json(employees)).catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('Fut a szerver');
})