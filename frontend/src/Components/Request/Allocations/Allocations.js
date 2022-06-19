import React,{Component} from 'react';
import './allocations.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import AllocationDashboard from './AllocationDashboard';


function Allocations (props) {
    return (
      <div className="Allocations">
            <NavBar isAuth={props.user.isAdmin} isEmp={props.user.isEmployee}/>

            <AllocationDashboard user={props.user}/>
            
            <Footer />
      </div>
    );
}

export default Allocations;