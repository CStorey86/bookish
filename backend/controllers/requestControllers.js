import mongoose from 'mongoose';
import {requestSchema} from '../models/requestModel';

const Request = mongoose.model('Request', requestSchema);

// ADD NEW REQUEST
export const addNewRequest =(req,res) =>{
    let newRequest = new Request(req.body)
    
    newRequest .save((err,Request)=>{
        if(err){
            res.send(err);
        }
        res.json(Request);
    });
};

// GET ALL REQUESTS
export const getRequests =(req,res) =>{

    //Query strings in API call
    let query;
    const reqQuery ={...req.query};     
    const removeFields = ["sort"];
    removeFields.forEach(val => delete reqQuery[val]);

    let queryStr =JSON.stringify(reqQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g,(match)=> `$${match}`);

    Request.find(JSON.parse(queryStr),(err, Request)=>{
        if(err){
            res.send(err);
        }
        res.json(Request);
    });
};


// VIEW SINGLE REQUEST
export const getRequestWithID = (req, res) => {
    Request.findById(req.params.RequestId,(err, Request) => {
        if (err) {
            res.send(err);
        }
        res.json(Request);
    });
};

// UPDATE SINGLE REQUEST
export const updateRequest = (req, res) => {
    Request.findOneAndUpdate({ _id: req.params.RequestId}, req.body, {new: true}, (err, Request) => {
        if (err) {
            res.send(err);
        }
        res.json(Request);
    });
};

// DELETE SINGLE REQUEST 
export const deleteRequest = (req, res) => {

    Request.findOneAndDelete({ _id: req.params.RequestId}, (err, Request) => {
            if (err) {
                res.send(err);
            }
            res.json({message: "Successfully deleted Request"});
        });
};
