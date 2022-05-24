import { addNewUser, viewAllUsers, getUserWithID, updateUser, deleteUser } from '../controllers/userControllers';
import { addNewRequest, getRequests, getRequestsWithUserID, getRequestWithID, updateRequest, deleteRequest} from '../controllers/requestControllers';

const routes = (app) => {
    
    // USER API END POINTS
    app.route('/users')
        .get(viewAllUsers)
        .post(addNewUser)       //basic aadd user - not secure
          
    app.route('/users/:UserId')    
        .get(getUserWithID)
        .delete(deleteUser)
        .put(updateUser)

    //REQUEST API END POINTS
    app.route('/requests')
        .get(getRequests)
        .post(addNewRequest)

    app.route('/requests/UserId/:UserId')
        .get(getRequestsWithUserID)

    app.route('/requests/:RequestId')
        .get(getRequestWithID)
        .put(updateRequest)
        .delete(deleteRequest)
    

}

export default routes;