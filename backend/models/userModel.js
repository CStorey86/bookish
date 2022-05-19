import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({

	firstName: {
        type: String,
        required: [true, 'A firstname is required'],
        minlength: 2,
        maxlength: 24,
    },
    lastName: {
        type: String,
        required: [true, 'A lastname is required'],
        minlength: 2,
        maxlength: 24,
    },
    password: {
        type: String,
        required: [true, 'A password is required']
    },
    email: {
        type: String,
        required: [true, 'An email is required'],
        unique: true,
        minlength: 3,
        maxlength: 32,
    },
    createdDate:{
        type: Date,
        required: true,
        default: Date.now
          
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    isEmployee: {
        type: Boolean,
        required: true,
        default: false,
    },


});

module.exports = mongoose.model("User", UserSchema)