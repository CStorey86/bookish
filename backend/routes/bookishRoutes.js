const express = require("express");
const router = express.Router();

import { addNewUser, login, viewAllUsers, getUserWithID, updateUser, deleteUser } from '../controllers/userControllers';
import { addNewRequest, getRequests, getRequestWithID, updateRequest, deleteRequest} from '../controllers/requestControllers';
import {getChangeLogs, addNewChangeLog} from '../controllers/changeLogControllers';
import {getInfo, addNewInfo, getinfoWithID, updateInfo} from '../controllers/infoControllers';
import Auth from '../authentication/Auth.js';
import EmployeeCheck from '../authentication/EmployeeCheck.js';
import AdminCheck from '../authentication/AdminCheck.js';

// USER ROUTES
    // REGISTER A NEW USER 
        router.post("/register", addNewUser);

    // LOG IN USER (AFTER CHECKING CREDENTIALS)
        router.post('/login', login);

    // GET ALL USERS - AUTHORISERS ONLY
        router.get("/users", Auth, AdminCheck, viewAllUsers);

    // GET INDIVIDUAL USER WITH ID
        router.get("/users/:id", Auth, getUserWithID);

    // UPDATE USER DETAILS
        router.patch("/users/:id", Auth, updateUser);

    // DELETE A USER - AUTHORISERS ONLY
        router.delete("/users/:id", Auth, AdminCheck, deleteUser);

// REQUEST ROUTES

    // CREATE NEW REQUEST
        router.post("/requests", Auth, addNewRequest);

    // GET ALL REQUESTS
    router.get("/requests", Auth, EmployeeCheck, getRequests);

    // GET SINGLE REQUEST WITH ID
        router.get("/requests/:id", Auth, getRequestWithID);

    // UPDATE A REQUEST
        router.patch("/requests/:id", auth, updateRequest);

    // DELETE A REQUEST
        router.delete("/requests/:id", auth, deleteRequest);

// CHANGE LOG ROUTES
    // GET CHANGE LOGS
        router.get("/changelogs", Auth, getChangeLogs);

    // ADD NEW CHANGE LOG
        router.get("/changelogs", Auth, addNewChangeLog);       

// INFO LOG ROUTES
    // {getInfo, addNewInfo, getinfoWithID, updateInfo}

    // GET INFO REQUESTS
        router.get("/info", Auth, getInfo);

    // ADD NEW INFO REQUEST
        router.get("/info", Auth, EmployeeCheck, addNewInfo); 

    // GET INFO REQUEST WITH ID
        router.get("/info", Auth, getinfoWithID);  

    // UPDATE INFO
        router.get("/info", Auth, updateInfo);      

module.exports = router
