const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tripschema = new Schema({
    username: String, // String is shorthand for {type: String}
    // time: Date,
    time: {
        type: Date,
        required: true
    },
    place: { type: String, required: true },
    description: { type: String, required: true },
    maxlimit: { type: Number, required: true }

});

const Trips = mongoose.model('Trip', Tripschema);

module.exports = Trips


