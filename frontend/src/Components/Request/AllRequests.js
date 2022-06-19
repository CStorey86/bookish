import React from 'react';
import './requests.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import AllRequestDashboard from './AllRequestDashboard';


function Requests(props){
    return (
        <div className="Requests">
            <NavBar isAuth={props.user.isAdmin} isEmp={props.user.isEmployee}/>
            <AllRequestDashboard currentUser={props.user} />
            <Footer />
      </div>
    );
    
}

export default Requests;