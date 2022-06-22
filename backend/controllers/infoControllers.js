import mongoose from 'mongoose';
import {infoSchema} from '../models/infoModel';

const Info = mongoose.model('Info', infoSchema);

// ADD INFO
export const addNewInfo =(req,res) =>{
    let newInfo = new Info(req.body)

    newInfo.save((err,Info)=>{
        if(err){
            res.send(err);
        }
        res.json(Info);
    });
};


//GET INFO
export const getInfo =(req,res) =>{

    //Query strings in API call
    let query;
    const reqQuery ={...req.query};     
    const removeFields = ["sort"];
    removeFields.forEach(val => delete reqQuery[val]);

    let queryStr =JSON.stringify(reqQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g,(match)=> `$${match}`);

    Info.find(JSON.parse(queryStr),(err, Info)=>{
        if(err){
            res.send(err);
        }
        res.json(Info);
    });
};


