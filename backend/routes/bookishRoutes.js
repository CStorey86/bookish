const express = require("express");
const auth = require("../auth/auth");
const admin = require("../auth/admin");

//Initialise router
const router = express.Router();

//import controller functions
    const {
        
        registerUser,

    } = require('../controllers/userControllers')


//ROUTES

    //Login Routes
        // router.post("/register", register);
        // router.post("/login", login);

    //User routes



//Export router
module.export = router;

