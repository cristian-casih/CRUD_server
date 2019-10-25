const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }

});
PersonSchema.path('name').validate(
    (p) => {
        return ((p != "") && (p != null));
    });


module.exports = mongoose.model('persons', PersonSchema);
