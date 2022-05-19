import { addNewUser, viewAllUsers, registerUser } from '../controllers/userControllers';


const routes = (app) => {
    app.route('/users')
    // GET endpoint
        .get(viewAllUsers)
    // POST endpoint
        .post(addNewUser)       //basic aadd user - not secure
                
        .post(registerUser);


}

export default routes;