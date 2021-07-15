const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const staffSchema = mongoose.Schema({
    pseudo: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

staffSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Staff', staffSchema);