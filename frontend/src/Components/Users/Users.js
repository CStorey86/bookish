import React from 'react';
import './users.css';

import UsersDashboard from './UsersDashboard';

  // GET USER FROM STORED LOGIN TOKEN 
  const user = localStorage.getItem('user');
  let thisUser ={};
  if(user != null)
  {
    thisUser = JSON.parse(user);
  }

function Users (props) {
    return (
      <div className="User">
        <UsersDashboard user={thisUser}/>
      </div>
    );
  }


export default Users;
