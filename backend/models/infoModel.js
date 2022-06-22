import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const infoSchema = new Schema({

    requestID:{
        type: String,
    },
    infoReqBy:{
        type: String,
    },
    empMsg: {
        type: String,
    },
    empMsgDate:{
        type: Date,
    },
    infoGivenBy:{
        type: String,
    },
    userMsg:{
        type: String,
    },
    userMsgDate:{
        type: Date,
    },
    
});