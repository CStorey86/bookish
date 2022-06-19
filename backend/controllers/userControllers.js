import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { UserSchema} from '../models/userModel';

const jwt = require('jsonwebtoken');
const User = mongoose.model('User', UserSchema);


//REGISTER
export const addNewUser = (req, res) => {
    let newUser = new User(req.body);
    newUser.save((err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};


// VIEW ALL USERS  - AUTHORISERS ONLY
export const viewAllUsers = (req, res) => {
    User.find({},(err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};

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

// VIEW SINGLE USER
export const getUserWithID = (req, res) => {
    User.findById(req.params.UserId,(err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};

// UPDATE SINGLE USER
export const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.UserId}, req.body, {new: true}, (err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};

//DELETE SINGLE USER - AUTHORISERS ONLY
export const deleteUser = (req, res) => {
    User.remove(req.params.UserId,(err, User) => {
        if (err) {
            res.send(err);
        }
        res.json({message: "Successfully deleted User"});
    });
};
