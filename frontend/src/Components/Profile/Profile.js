import React from 'react';
import './profile.css';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProfileCard from './ProfileCard';
import {getUserWithID} from '../Utils';

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