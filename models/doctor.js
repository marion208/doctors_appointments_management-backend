const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);