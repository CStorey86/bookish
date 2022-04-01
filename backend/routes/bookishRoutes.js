import { addNewUser, getUsers, getUserWithID, updateUser, deleteUser} 
            from '../controllers/userControllers';
import { addNewRequest, getRequests, getRequestsWithUserID} 
            from '../controllers/requestControllers';

const routes = (app) => {
    app.route('/users')      
        .get(getUsers)      
        .post(addNewUser);

    app.route('users/:UserID')          
        .get(getUserWithID)
        .put(updateUser)
        .delete(deleteUser);

    app.route('/requests')
        .get(getRequests)
        .get(getRequestsWithUserID)
        .post(addNewRequest);   
}

export default routes;