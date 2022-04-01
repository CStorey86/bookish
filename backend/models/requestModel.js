import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const requestSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    author:{
        type: String
        //may need to be adapted for multiple authors
    },
    year:{
        type: Number
    },
    publisher:{
        type: String
    },
    format:{
        type: String,
        enum: ["Book","Audiobook","Braille"],        //allows for more types to be added e.g. braille or large print.
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    status:{
        type:String,
        enum: ["Awaiting Allocation, Allocated, Requires further information, Awaiting authorisation, Complete"],
        required: true
    }
});