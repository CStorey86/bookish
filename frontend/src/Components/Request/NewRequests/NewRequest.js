import React,{Component} from 'react';
import './newRequests.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import NewRequestForm from './newRequestForm';

  // GET USER FROM STORED LOGIN TOKEN 
  const user = localStorage.getItem('user');
  let thisUser ={};
  if(user != null)
  {
    thisUser = JSON.parse(user);
  }

function NewRequest (props){
    return (
      <div className="NewRequest">
            <NewRequestForm currentUser={thisUser}/>
      </div>
    );
}


export default NewRequest;