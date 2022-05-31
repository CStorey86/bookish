import React from 'react';
import './requests.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import RequestDashboard from './RequestDashboard';

const test="testing"


function Requests(props){
    return (
        <div className="Requests">
            <NavBar/>
            <RequestDashboard />
            <Footer />
      </div>
    );
    
}

export default Requests;