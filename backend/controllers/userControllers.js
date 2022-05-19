import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { UserSchema} from '../models/userModel';

const User = mongoose.model('User', UserSchema);


//REGISTER//
export const registerNewUser = (req, res) => {
    // try{
        let newUser = new User(req.body);

    //     //Get valid inputs
    //         if(!(req.body.username && req.body.password && req.body.firstName && req.body.lastName)){
    //             return res.status(400).send("Missing fields from request");
    //         }
    //     //Check if user exists
    //         const existUser = await User.findOne({email: req.body.email});
    //         if(existUser){
    //             return res.status(409).send("User already exists - Please Login");
    //         }

    //     //Encrpyt password
    //         encryptedPassword = await bcrypt.hash(req.body.password,10);
            
    //     //add to database
    //         const User = new user({
    //             firstName: req.body.firstName,
    //             lastName: req.body.lastName,
    //             email: req.body.email,
    //             password: req.body.password
    //         })
    //         await user.save();
    //     //confirm user has been added    
    //         return res.status(201).send("User Successfully created")
    // }



    newUser.save((err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};

// LOGIN //

export const login =(req,res) =>{
    //Get valid inputs
    //check if exists
    //check password
    //create token



};

// VIEW ALL USERS //
export const viewAllUsers = (req, res) => {
    User.find({},(err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};

//SINGLE USER

//DELETE SINGLE USER
