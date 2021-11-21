const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tripschema = new Schema({
    userID: String, // String is shorthand for {type: String}
    // time: Date,
    time: {
        type: Date,
        required: true
    },
    place: { type: String, required: true },
    description: { type: String, required: true },
    maxlimit: { type: Number, required: true },
    // done: {type: Boolean, required: false, default: false},

});

const Trips = mongoose.model('Trip', Tripschema);

module.exports = Trips


