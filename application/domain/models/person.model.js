const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    dateofbirth: { type: Date },
    email: String,
    sex: { type: String, enum: ['man', 'woman'] },
    created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('persons', personSchema);