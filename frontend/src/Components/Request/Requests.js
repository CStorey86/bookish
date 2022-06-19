import React from 'react';
import './requests.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import RequestDashboard from './RequestDashboard';


function Requests(props){
    return (
        <div className="Requests">
            <NavBar/>
            <RequestDashboard currentUser={props.user}/>
            <Footer />
      </div>
    );
    
}

export default Requests;