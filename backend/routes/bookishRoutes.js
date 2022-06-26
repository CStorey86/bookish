const express = require("express");
const router = express.Router();

import { addNewUser, login, viewAllUsers, getUserWithID, updateUser, deleteUser } from '../controllers/userControllers';
import { addNewRequest, getRequests, getRequestWithID, updateRequest, deleteRequest} from '../controllers/requestControllers';
import {getChangeLogs, addNewChangeLog} from '../controllers/changeLogControllers';
import {getInfo, addNewInfo, getinfoWithID, updateInfo} from '../controllers/infoControllers';
import Auth from '../authentication/Auth.js';
import EmployeeCheck from '../authentication/EmployeeCheck.js';
import AdminCheck from '../authentication/AdminCheck.js';

const routes = (app) => {
    
    // USER API END POINTS
    app.route('/users')
        .get(viewAllUsers) // employee and authorisers only
        .post(addNewUser)
          
    app.route('/users/:UserId')    
        .get(getUserWithID)
        .delete(deleteUser)
        .put(updateUser)

    app.route('/login')
        .post(login)
        

    // REQUEST API END POINTS
    app.route('/requests')
        .get(getRequests)
        .post(addNewRequest)

    app.route('/requests/:RequestId')
        .get(getRequestWithID)
        .put(updateRequest)
        .delete(deleteRequest)
    
    //  CHANGE-LOG API END POINTS
    app.route('/changeLogs')
        .get(getChangeLogs)
        .post(addNewChangeLog)

    // INFO API END POINTS
    app.route('/info')
        .get(getInfo)
        .post(addNewInfo)

    app.route('/info/:InfoId')
        .get(getinfoWithID)
        .put(updateInfo)
}

export default routes;



    // GET ALL USERS - AUTHORISERS ONLY
    //     router.get("/users", Auth, AdminCheck, viewAllUsers);

    // // GET ALL REQUESTS
    // router.get("/requests", Auth, EmployeeCheck, getRequests);

   