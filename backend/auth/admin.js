const jwt = require("jsonwebtoken");
const User = require('../models/userModel');
const config = process.env;

/**
 * verifyToken | A middleware function that checks to see if the 
 * user and admin (authoriser) and is properly authenticated, by retrieving their profile from
 * the database and checking their status.
 * If the check passes, it will continue to the next functon, otherwise 
 * it will reject the request with a 401.
 */
const verifyToken = async (req, res, next) => {
  if (req.user.isAdmin) {
    return next()
  } else{
    return res.status(401).send("Unathorised for this action");
  }
};

module.exports = verifyToken;