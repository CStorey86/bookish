const jwt = require("jsonwebtoken");
const User = require('../models/User');
const config = process.env;

/**
 * verifyToken | A middleware function that checks to see if the 
 * user is an employee that is properly authenticated, by retrieving their profile from
 * the database and checking their status.
 * If the check passes, it will continue to the next functon, otherwise 
 * it will reject the request with a 401.
 */
const verifyToken = async (req, res, next) => {
  if (req.user.isEmployee) {
    return next()
  } else{
    return res.status(401).send("Unathorised for this action");
  }
};

module.exports = verifyToken;