import React from 'react';
import './requests.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import AllRequestDashboard from './AllRequestDashboard';

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


function Requests(props){
    return (
        <div className="Requests">
            <AllRequestDashboard currentUser={thisUser} />
      </div>
    );
    
}

export default Requests;