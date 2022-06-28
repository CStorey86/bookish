import React from 'react';
import './home.css';

import Dashboard from './Dashboard';

const Home = (props) =>{
  // GET USER FROM STORED LOGIN TOKEN 
  const user = localStorage.getItem('user');
  let thisUser ={};
  if(user != null)
  {
    thisUser = JSON.parse(user);
  }
  
    return (
      <div className="Home">
          <Dashboard currentUser={thisUser}/>
      </div>
    );
 }


export default Home;
