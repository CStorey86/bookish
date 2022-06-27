const jwt = require("jsonwebtoken");
const User = require('../models/userModel');
const config = process.env;

// VERIFY IF USER IS AN EMPLOYEE OR ADMIN (ADMIN INHERITS EMPLOYEE RIGHTS)
const  verifyRole = async (req, res, next) => {
    const user_id = req.user.user_id;
    try{ 
		if (req.user.isEmployee == true || req.user.isAdmin){
			return next();
		} else {
			res.status(401);
			return res.status(401).send("Not Authorised For This Request");
		}
    } catch(error) {
        return res.status(401).send("Invalid Token");
    }
};

module.exports = verifyRole;