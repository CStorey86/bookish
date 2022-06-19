import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const requestSchema = new Schema({
    title:{
        type:String,
        required: [true, 'A Title is required']
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
        enum: ["Book","Audio Book","Braille"],        //allows for more types to be added e.g. braille or large print.
        required: [true, 'The Format is required']
    },
    price:{
        type: Number,
        required: [true, 'A Price is required']
    },
    userID:{
        type: String,
        required: true
    },
    status:{
        type:String,
        enum: ["Awaiting Allocation", "Updated", "Allocated", "Requires further information", "Awaiting authorisation", "Complete"],
        required: true,
        default: "Awaiting Allocation"
    },
    dateStatusChange:{
        type: Date,
        required: true,
        default: Date.now
    },

    allocatedTo:{
        type: String,        
    },

    authorisedBy:{
        type: String,
    },
    
    isComplete:{
        type: Boolean,
        required: true,
        default: false
    }

    //add boolean complete?

});