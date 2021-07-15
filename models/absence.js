const mongoose = require('mongoose');

const absenceSchema = mongoose.Schema({
    id_doctor: { type: String, required: true },
    date_begin: { type: Date, required: true },
    date_end: { type: Date, required: true }
});

module.exports = mongoose.model('Absence', absenceSchema);