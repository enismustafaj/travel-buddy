const { Schema } = mongoose;
import mongoose from 'mongoose';

const UserSchema = new Schema({
    username: { type: String, required: true }, // String is shorthand for {type: String}
    description: { type: String, required: true },
    // comments: [{ body: String, date: Date }],
    rating: { type: Number, required: true },
    activities: [{ body: String, required: true }]
});

const User = mongoose.model('User', UserSchema);
module.export = User;