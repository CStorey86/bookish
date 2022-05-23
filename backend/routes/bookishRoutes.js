import { addNewUser, viewAllUsers, getUserWithID, updateUser, deleteUser } from '../controllers/userControllers';
import { addNewRequest, getRequests, getRequestsWithUserID, getRequestWithID, updateRequest, deleteRequest} from '../controllers/requestControllers';

const routes = (app) => {
    
    // USER API END POINTS
    app.route('/users')
        .get(viewAllUsers)
        .post(addNewUser)       //basic aadd user - not secure
          
    app.route('/users/:userID')    
        .get(getUserWithID)
        .delete(deleteUser)
        .put(updateUser)

    //REQUEST API END POINTS
    app.route('/requests')
        .get(getRequests)
        .post(addNewRequest)

    app.route('/requests/:userID')
        .get(getRequestsWithUserID)

    app.route('/requests/:requestID')
        .get(getRequestWithID)
        .put(updateRequest)
        .delete(deleteRequest)
    

}

export default routes;