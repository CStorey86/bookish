import React from 'react';
import './home.css';

import Dashboard from './Dashboard';

const Home = (props) =>{

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
  
  // IF NO AUTH USER - REDIRECT TO LOGIN.
    return (
      <div className="Home">
          <Dashboard user={thisUser}/>
      </div>
    );
 }


export default Home;
