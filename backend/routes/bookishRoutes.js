import { registerNewUser, viewAllUsers } from '../controllers/userControllers';


const routes = (app) => {
    app.route('/players')
    // GET endpoint
        .get(viewAllUsers)
    // POST endpoint
        .post(registerNewUser);
}

export default routes;