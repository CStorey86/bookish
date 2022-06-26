const jwt = require("jsonwebtoken");
const User = require('../models/User');
const config = process.env;

/**
 * verifyRole | A middleware function that checks to see if the 
 * user is properly authenticated, by retrieving their profile from
 * the database and checking their status.
 * If the check passes, it will continue to the next functon, otherwise 
 * it will reject the request with a 401.
 */
const  verifyRole = async (req, res, next) => {
    const user_id = req.user.user_id;
    try{ 
		if (req.user.isEmployee == true || req.user.isAdmin){
			return next();
		} else {
			res.status(401);
			return res.status(401).send("Not Authorised For This Request");
		}
    } catch {
        return res.status(401).send("Invalid Token");
    }
};

module.exports = verifyRole;