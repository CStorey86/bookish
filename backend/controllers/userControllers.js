import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { UserSchema} from '../models/userModel';
import jwt from 'jsonwebtoken'

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

export const login = (req, res) => {
    try{
        const {email, password} = req.body;
        // VALIDATE USER INPUTS (if empty return error)
        if(!(email && password)){
            return res.status(400).send("Additional input is required");
        }

        // CHECK EMAIL EXISTS IN DB
        const user = User.findOne({email});

        // COMPARE PASSWORDS
        if (user && (bcrypt.compare(password, user.password))) {
            //SUCCESSFUL LOGIN - CREATE TOKEM
                const token = jwt.sign(
                    {user_id: user._id, email},
                    process.env.TOKEN_KEY,{
                        expiresIn: "2h",
                    }
                );
            //SAVE USER TOKEN
                user.token = token;
            //REMOVE PASSWORD
                user.password = undefined;
            //SET USER
                return res.status(200).json(user);
        }
        else{
            return res.status(404).send("Invalid Credentials");
        }
    }
    catch(error){
        console.log(err)
        return res.status(500).send("Internal Server Error");
    }
}


// GET ALL USERS (WITHOUT PASSWORDS) - AUTHORISERS ONLY
export const viewAllUsers = (async (req, res) => {
    try{
        const users = await User.find().select("-password");
        return res.send(users);
    }catch(error){
        return res.status(500).send({ error: 'Server Error Occured'});
    }
});


// GET SINGLE USER USING ID (WITHOUT PASSWORD)
export const getUserWithID = ( async (req, res) => {

    try {
		if (req.user.isAdmin || req.user.isEmployee || req.user._id == req.params.id){
			const user = User.findOne({ _id: req.params.id }).select("-password");
			if (user === null) return res.status(404).send('The requested user does not exist');
			return res.status(200).send(user);

		}else {
			return res.status(401).send('You do not have permission for this action.');
		}
		
	} catch (error){
		return res.status(404).send("User doesn't exist!");
	}
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
