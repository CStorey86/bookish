import React,{Component} from 'react';
import './newRequests.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import NewRequestForm from './newRequestForm';

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

function NewRequest (props){
    return (
      <div className="NewRequest">
            <NewRequestForm currentUser={thisUser}/>
      </div>
    );
}


export default NewRequest;