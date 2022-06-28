import React from 'react';
import './requests.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import RequestDashboard from './RequestDashboard';

  // GET USER FROM STORED LOGIN TOKEN 
  const user = localStorage.getItem('user');
  let thisUser ={};
  if(user != null)
  {
    thisUser = JSON.parse(user);
  }

function Requests(props){
    return (
        <div className="Requests">
            <RequestDashboard currentUser={thisUser}/>
      </div>
    );
    
}

export default Requests;