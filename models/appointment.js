const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    id_doctor: { type: String, required: true },
    firstname_patient: { type: String, required: true },
    lastname_patient: { type: String, required: true },
    tel_patient: { type: String, required: true },
    date_appointment: { type: Date, required: true }
});

module.exports = mongoose.model('Appointment', appointmentSchema);