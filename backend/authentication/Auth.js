const jwt = require("jsonwebtoken");
const User = require('../models/userModel');
const config = process.env;

// MIDDLEWARE FUNCTION TO CHECK USER AUTHENTICATION

export const verifyToken = async (req, res, next) => {
  try{
    const token = req.headers.authorization.split(" ")[1]; 
    const isCustomAuth = token.length <500; // AUTH FROM OWN LOGIN - AUTH FROM GOOGLE/OTHER SOURCES WILL BE >500

    // CHECK FOR TOKEN
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    let decodedData;

    // GET DATA FROM TOKEN USING PRIVATE KEY
    if(token && isCustomAuth){
        decodedData = jwt.verify(token, config.TOKEN_KEY);

        req.userId = decodedData ?.id;
    } else{
      decodedData = jwt.decode(token);
      req.userId = decodedData ?.sub
    }

  } catch(error){
    console.log(error);
    return res.status(401).send("Invalid Token");
  }
  return next();
}
