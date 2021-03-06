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
        required: [true, 'A password is required'],
        minlength: 8,  // SET AS 8 AS PER MIN INDUSTRY STANDARDS
    },
    email: {
        type: String,
        required: [true, 'An email is required'],
        minlength: 3,
        maxlength: 32,
        unique: true,
    },
    createdDate:{
        type: Date,
        default: Date.now()
          
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isEmployee: {
        type: Boolean,
        default: false,
    },

    authLimit: {
        type: Number,
        default: 0,
    },
    token: {
        type: String
    },


});

module.exports = mongoose.model("User", UserSchema)