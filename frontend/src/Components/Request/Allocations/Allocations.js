import React,{Component} from 'react';
import './allocations.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import AllocationDashboard from './AllocationDashboard';

   // GET USER FROM STORED LOGIN TOKEN 
   const user = localStorage.getItem('user');
   let thisUser ={};
   if(user != null)
   {
     thisUser = JSON.parse(user);
   }


function Allocations (props) {
    return (
      <div className="Allocations">
            <AllocationDashboard user={thisUser}/>
      </div>
    );
}

export default Allocations;