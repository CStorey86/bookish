import React from 'react';
import './profile.css';
import ProfileCard from './ProfileCard';

  // GET USER FROM STORED LOGIN TOKEN 
  const user = localStorage.getItem('user');
  let currentUser ={};
  if(user != null)
  {
    currentUser = JSON.parse(user);
  }

function Profile (props) {
    return (
      <div className="Profile">
            <ProfileCard thisUser={currentUser}/>
      </div>
    );
  }

export default Profile;