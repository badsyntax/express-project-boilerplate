var mongoose = require('mongoose');

var PersonSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    isDead: Boolean
});

var PersonModel = mongoose.model('Person', PersonSchema);

module.exports = exports = PersonModel;