import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    aadhaar: {
        type: String,
        required: true,
        unique: true,
    },
    Age:{
        type:Number,
        

    },
    otp: {
        type: String,
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
