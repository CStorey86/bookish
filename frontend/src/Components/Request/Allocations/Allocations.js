import React,{Component} from 'react';
import './allocations.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import AllocationDashboard from './AllocationDashboard';

  /////////////////////////////// TO BE REPLACED ////////////////////////////////////

  let thisUser = {
    id: "62af7c4daea678e8b9f650d3",
    firstName: "Claire",
    lastName: "Storey",
    email: "claire@email.com",
    createdDate: "2022-05-05T13:10:00.000+00:00",
    isAdmin: false,
    isEmployee: false,
  };     

  ///////////////////////////////////////////////////////////////////////////////////


function Allocations (props) {
    return (
      <div className="Allocations">
            <AllocationDashboard user={thisUser}/>
      </div>
    );
}

export default Allocations;