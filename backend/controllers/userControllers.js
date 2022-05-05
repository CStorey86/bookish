import mongoose from 'mongoose';
const  bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User', UserSchema);


const registerUser = (async(req,res) => {
    try{
		// Validate user input
		if (!(req.body.email && req.body.password && req.body.firstName && req.body.lastName)) {
			return res.status(400).send("Missing fields from request");
		  }
		const oldUser = await User.findOne({ email: req.body.email });
    	if (oldUser) {
			// username already exists, so return error
      		return res.status(409).send("User Already Exists. Please Login");
    	}
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(req.body.password, 10);
		const user = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			password: encryptedPassword,
			email: req.body.email,
		})
		await user.save();
		return res.status(201).send("User successfully created")
	} catch (error) {
		return res.status(500).send({error: error});
	}
})

const getAllUsers = (async(req,res) => {
    try{
		const users = await User.find().select("-password");
		return res.send(users);
	} catch (error){
		return res.status(500).send({ error: 'Server Error Occured'});
	}
})


const getUser = (async(req,res) => {
    try {
		if (req.user.isAdmin || req.user._id == req.params.id){
			const user = await User.findOne({ _id: req.params.id }).select("-password");
			if (user === null) return res.status(404).send('The requested user does not exist');
			return res.status(200).send(user);

		}else {
			return res.status(401).send('You do not have permission for this action.');
		}
		
	} catch {
		return res.status(404).send("User doesn't exist!");
	}
})

const register = (async(req,res) => {
    try{
		// Validate user input
		if (!(req.body.email && req.body.password && req.body.firstName && req.body.lastName)) {
			return res.status(400).send("Missing fields from request");
		  }
		const oldUser = await User.findOne({ email: req.body.email });
    	if (oldUser) {
			// username already exists, so return error
      		return res.status(409).send("User Already Exists. Please Login");
    	}
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(req.body.password, 10);
		const user = await User.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			password: encryptedPassword,
			email: req.body.email.toLowerCase(),
		})
		user.password = undefined;
		console.log(user);
		const token = jwt.sign (
			{ 
				user_id: user._id,
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
				isAdmin: user.isAdmin,
				cars: user.cars,
				payments: user.payments,
			},process.env.TOKEN_KEY,
			{
			  expiresIn: "2h",
			}
		)
		return res.status(201).send(token)
	} catch (error) {
		console.log(error);
		return res.status(500).send({error: error});
	}
})

const login = (async(req,res) => {
    try {
		const { email, password } = req.body;
		// Validate user input
		if (!(email && password)) {
		  return res.status(400).send("Additional input is required");
		}
		// See if user already exists
		const user = await User.findOne({ email });
	
		if (user && (await bcrypt.compare(password, user.password))) {
		  // Create token that lasts 2 hours and uses the TOKEN_KEY env to salt.
		  const token = jwt.sign (
			{ 
				user_id: user._id,
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
				isAdmin: user.isAdmin,
				cars: user.cars,
				payments: user.payments,
			},process.env.TOKEN_KEY,
			{
			  expiresIn: "2h",
			}
			)
		  // return the user, and the token
		  return res.status(200).json({token: token});
		}else{
			return res.status(404).send("Invalid Credentials");
		}
	}catch (err) {
		console.log(err);
		return res.status(500).send("Internal Server Error");
	}
})

const deleteUser = (async(req,res) => {
    try {
		await User.deleteOne({ _id: req.params.id })
		return res.status(204).send("Successfully deleted user");
	} catch {
		return res.status(404).send("User doesn't exist!")
	}
})

const modifyUser = (async(req,res) => {
    try {
		await User.findOneAndUpdate({ _id: req.params.id }, req.body);
		user = await User.findOne({ _id: req.params.id });
		return res.status(200).send(user);
	} catch (error) {
		console.log(error.message);
		if(error.message.includes("duplicate key error")) {
			return res.status(409).send("Email Already In Use");
		}
		return res.status(404).send("User doesn't exist!");
	}
})


module.exports = {
    getAllUsers,
    registerUser,
    getUser,
    register,
    login,
    deleteUser,
    modifyUser,
}


