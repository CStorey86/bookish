const jwt = require("jsonwebtoken");
const User = require('../models/userModel');
const config = process.env;

// VERIFY IF USER IS AN ADMIN (CAN AUTHORISE REQUESTS)
const  verifyAdmin = async (req, res, next) => {
    try{ 
		if (req.user.isAdmin == true){
			return next();
		} else {
			res.status(401);
			return res.status(401).send("Not Authorised For This Request, Must Be Admin");
		}
    } catch (error){
        console.log(error);
        return res.status(401).send("Invalid Token");
    }
};

module.exports = verifyAdmin;