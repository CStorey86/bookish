import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//Create Scheme
export const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    userType:{
        type: String,
        enum: ["Standard User","Employee", "Authorisor"],
        default: "Standard User"
    },
    createdDate:{
        type: Date,
        default: Date.now
          
    }


});