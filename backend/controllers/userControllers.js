import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { UserSchema} from '../models/userModel';

const User = mongoose.model('User', UserSchema);

// REGISTER - SECURE
export const addNewUser = ( async (req, res) => {
    try{
		// CHECK FOR MISSING FIELDS
		if (!(req.body.firstName && req.body.lastName && req.body.email && req.body.password )) {
			return res.status(400).send("Missing fields from request");
		  }
        // CHECK IF USER ALREADY EXISTS IN DB
		const oldUser = await User.findOne({ email: req.body.email });
    	if (oldUser) {
			// USER WITH THIS EMAIL ALREADY EXISTS - RETURN ERROR
      		return res.status(409).send("User Already Exists. Please Login");
    	}
        // ENCRYPT ENTERED USER PASSORD (SALT AND HASH)
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);

        // CREATE NEW USER
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: encryptedPassword,
            createdDate: Date.now(),
            isAdmin: false,                 // NEW ADMINS CAN BE MADE BY EXISTING ADMINS
            isEmployee: false,              // USERS CAN BE MADE EMPLOYEES BY ADMINS
            authLimit: 0,                   // AUTH LIMIT CHANGED IF USER IS MADE EMPLOYEE/ADMIN ETC.           
        })
        await newUser .save((err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
        return res.status(201).send("User successfully created")

        
	} catch (error) {
		return res.status(500).send({error: error.message});
	}
})


// VIEW ALL USERS  - AUTHORISERS ONLY
export const viewAllUsers = (req, res) => {
    User.find({},(err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};


// GET SINGLE USER USING ID (WITHOUT PASSWORD)
export const getUserWithID = ( async (req, res) => {
        User.findOne(req.params.UserId,(err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
});



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
