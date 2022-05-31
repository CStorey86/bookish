import { addNewUser, viewAllUsers, getUserWithID, updateUser, deleteUser } from '../controllers/userControllers';
import { addNewRequest, getRequests, getRequestWithID, updateRequest, deleteRequest} from '../controllers/requestControllers';
import {getChangeLogs, addNewChangeLog} from '../controllers/changeLogControllers';

const routes = (app) => {
    
    // USER API END POINTS
    app.route('/users')
        .get(viewAllUsers)
        .post(addNewUser)       //basic add user - not secure
          
    app.route('/users/:UserId')    
        .get(getUserWithID)
        .delete(deleteUser)
        .put(updateUser)

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
}

export default routes;