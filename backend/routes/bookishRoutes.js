import { addNewUser, loginUser, getAllUsers, getUserWithID, updateUser, deleteUser } from '../controllers/userControllers';
import { addNewRequest, getRequests, getRequestWithID, updateRequest, deleteRequest} from '../controllers/requestControllers';
import {getChangeLogs, addNewChangeLog} from '../controllers/changeLogControllers';
import {getInfo, addNewInfo, getinfoWithID, updateInfo} from '../controllers/infoControllers';

import AdminCheck from '../middleware/AdminCheck';
import EmployeeCheck from '../middleware/EmployeeCheck';
import Auth from '../middleware/Auth';

const routes = (app) => {
    
    // USER API END POINTS
    app.route('/users')
        .get(AdminCheck, getAllUsers) // employee and authorisers only
        .post(addNewUser)
    
 //     router.get("/users", Auth, AdminCheck, viewAllUsers);


    app.route('/users/:UserId')    
        .get(getUserWithID)
        .delete(deleteUser)
        .put(updateUser)

    app.route('/login')
        .post(loginUser)
        

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

    // // GET ALL REQUESTS
    // router.get("/requests", Auth, EmployeeCheck, getRequests);

   