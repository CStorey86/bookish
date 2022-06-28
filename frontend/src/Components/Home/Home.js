import React from 'react';
import './home.css';

import Dashboard from './Dashboard';

const Home = (props) =>{
  // GET USER FROM STORED LOGIN TOKEN
  let thisUser = JSON.parse(localStorage.getItem('user'));
  
  // IF NO AUTH USER - REDIRECT TO LOGIN.
    return (
      <div className="Home">
          <Dashboard currentUser={thisUser}/>
      </div>
    );
 }


export default Home;
