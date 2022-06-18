import { faThermometerQuarter } from '@fortawesome/free-solid-svg-icons';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const changeLogSchema = new Schema({

    requestID:{
        type: String,
        required: true
    },

    newStatus:{
        type:String,
        enum: ["Created", "Updated", "Allocated", "Requires further information", "Awaiting authorisation", "Complete"],
        default: "Awaiting Allocation",
        required: true
    },

    dateChange:{
        type: Date,
        default: Date.now,
        required: true
    },

    userID:{
        type: String,
        required: true
    }
    
});