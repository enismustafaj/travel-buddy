const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitiesschema = new Schema({
    activityID: { type: String, required: true },
    userID: { type: String, required: true },
    type: { type: String, required: true }
});

const activities = mongoose.model('Activity', activitiesschema);

module.exports = activities;