import React,{Component} from 'react';
import './allocations.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import AwaitingAllocation from './AwaitingAllocation';
import MyAllocations from './MyAllocations';


function Allocations (props) {
    return (
      <div className="Allocations">
            <NavBar isAuth={props.user.isAdmin} isEmp={props.user.isEmployee}/>

            <AwaitingAllocation />
            
            <MyAllocations />

            <Footer />
      </div>
    );
}

export default Allocations;