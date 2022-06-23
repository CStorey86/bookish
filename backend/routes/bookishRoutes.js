import { addNewUser, viewAllUsers, getUserWithID, updateUser, deleteUser } from '../controllers/userControllers';
import { addNewRequest, getRequests, getRequestWithID, updateRequest, deleteRequest} from '../controllers/requestControllers';
import {getChangeLogs, addNewChangeLog} from '../controllers/changeLogControllers';
import {getInfo, addNewInfo, getinfoWithID, updateInfo} from '../controllers/infoControllers';

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

    // INFO API END POINTS
    app.route('/info')
        .get(getInfo)
        .post(addNewInfo)

    app.route('/info/:InfoId')
        .get(getinfoWithID)
        .put(updateInfo)
}

export default routes;