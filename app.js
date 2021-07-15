const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const doctorRoutes = require('./routes/doctor');
const appointmentRoutes = require('./routes/appointment');
const absenceRoutes = require('./routes/absence');
const staffRoutes = require('./routes/staff');

mongoose.connect(process.env.API_KEY,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/doctor', doctorRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/absence', absenceRoutes);
app.use('/api/auth', staffRoutes);

module.exports = app;