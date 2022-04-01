import mongoose from 'mongoose';
import {requestSchema} from '../models/requestModel';

const Request = mongoose.model('Request', requestSchema);

export const addNewRequest =(req,res) =>{
    let newRequest = new Request(req.body)
    
    newRequest .save((err,Request)=>{
        if(err){
            res.send(err);
        }
        res.json(Request);
    });
};

export const getRequests =(req,res) =>{
    Request.find({},(err, Request)=>{
        if(err){
            res.send(err);
        }
        res.json(Request);
    });
};

export const getRequestsWithUserID =(req,res) =>{
    Request.find({userID: userID},(err, Request)=>{
        if(err){
            res.send(err);
        }
        res.json(Request);
    });
};