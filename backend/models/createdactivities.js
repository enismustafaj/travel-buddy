const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Createdactivitiesschema = new Schema({
    activityID: { type: String, required: true }, // String is shorthand for {type: String}
    userID: { type: String, required: true },
});

const Createdactivities = mongoose.model('CreatedActivity', Createdactivitiesschema);

module.exports = Createdactivities;