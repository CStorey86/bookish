import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const changesSchema = new Schema({
    requestID:{
        type:String,
        required: true,
    },
    previousStatus:{
        type:String,
        required: true,
    },
    newStatus:{
        type:String,
        required: true,
    },
    dateUpdate:{
        type:String,
        required: true,
        default: date.now
    }

});