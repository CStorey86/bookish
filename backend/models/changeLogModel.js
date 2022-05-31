import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const changeLogSchema = new Schema({

    requestID:{
        type:String,
        required: true
    },

    newStatus:{
        type:String,
        enum: ["Awaiting Allocation", "Allocated", "Requires further information", "Awaiting authorisation", "Complete"],
        required: true,
        default: "Awaiting Allocation"
    },

    dateChange:{
        type: Date,
        required: true,
        default: Date.now
    }
    
});