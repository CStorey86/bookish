import mongoose from 'mongoose';
import {changeLogSchema} from '../models/changeLogModel';

const ChangeLog = mongoose.model('ChangeLog', changeLogSchema);

// ADD CHANGE LOG
export const addNewChangeLog =(req,res) =>{
    let newChangeLog = new ChangeLog(req.body)
    
    newChangeLog.save((err,ChangeLog)=>{
        if(err){
            res.send(err);
        }
        res.json(ChangeLog);
    });
};

//GET CHANGE LOGS 
export const getChangeLogs =(req,res) =>{

    //Query strings in API call
    let query;
    const reqQuery ={...req.query};     
    const removeFields = ["sort"];
    removeFields.forEach(val => delete reqQuery[val]);

    let queryStr =JSON.stringify(reqQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g,(match)=> `$${match}`);

    ChangeLog.find(JSON.parse(queryStr),(err, ChangeLog)=>{
        if(err){
            res.send(err);
        }
        res.json(ChangeLog);
    });
};


//no update or delete, as logs should be kept and a new log added for each change rather than altering existing logs.

