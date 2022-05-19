import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { UserSchema} from '../models/userModel';

const jwt = require('jsonwebtoken');
const User = mongoose.model('User', UserSchema);


//REGISTER//
export const addNewUser = (req, res) => {
    let newUser = new User(req.body);
    newUser.save((err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};

export const registerUser =(async (req,res) =>{
    //Get User Inputs
        const {firstName, lastName, email, password} = req.body;
    //Validate inputs
        if (!(email && password && firstName && lastName)) {
            return res.status(400).send("Missing fields from request");
        }
    //Check if user already exists
        const oldUser = await User.findOne({ email });
        if (oldUser) {
        return res.status(409).send("User Already Exists. Please Login");
        }

    //Encrypt password
        encryptedPassword = await bcrypt.hash(password, 10);

    //Create new user in mongoDB
        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),         // sanitisation: convert email to lowercase
            password: encryptedPassword,
        });

    //Create Token
		const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
          // save user token
          user.token = token;
          user.password = undefined;
          // return new user
          return res.status(201).send(user);

})

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
