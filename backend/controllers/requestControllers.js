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
    Request.find({},(err, Request)=>{
        if(err){
            res.send(err);
        }
        res.json(Request);
    });
};

// GET REQUESTS FOR ONE USER ONLY
export const getRequestsWithUserID =(req,res) =>{
    Request.find({userID: userID},(err, Request)=>{
        if(err){
            res.send(err);
        }
        res.json(Request);
    });
};

// VIEW SINGLE REQUEST
export const getRequestWithID = (req, res) => {
    Request.findById(req.params.RequestId,(err, User) => {
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
    Request.remove(req.params.RequestId,(err, User) => {
        if (err) {
            res.send(err);
        }
        res.json({message: "Successfully deleted Request"});
    });
};