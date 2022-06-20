import React from 'react';
import './authorisations.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import AuthorisationsDashboard from './AuthorisationsDashboard';


function Authorisations (props) {
    return (
      <div className="Authorisations">
            <NavBar isAuth={props.user.isAdmin} isEmp={props.user.isEmployee}/>
            <AuthorisationsDashboard currentUser={props.user}/>
            <Footer />
      </div>
    );
}


export default Authorisations;