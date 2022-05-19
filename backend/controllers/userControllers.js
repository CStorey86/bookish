const User = require('../models/userModel');
const  bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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


module.exports = {
    registerUser,

}