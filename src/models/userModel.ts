import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    role: { type: String, required: true, enum: ['shop_keeper', 'food_bank'] },
    phone: { type: String, required: true }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
