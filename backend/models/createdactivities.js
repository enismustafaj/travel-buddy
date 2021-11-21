const { Schema } = mongoose;
import mongoose from 'mongoose';

const CreatedActivitiesSchema = new Schema({
    activityID: { type: String, required: true }, // String is shorthand for {type: String}
    userID: { type: String, required: true },
});

const CreatedActivity = mongoose.model('CreatedActivity', CreatedActivitiesSchema);
module.export = CreatedActivity;