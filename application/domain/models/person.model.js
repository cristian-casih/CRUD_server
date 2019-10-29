const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    age: Number,
    email: String,
    sex: { type: String, enum: ['masculino', 'femenino'] },
    created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('persons', PersonSchema);