import React from 'react';
import './profile.css';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProfileCard from './ProfileCard';
import {getUserWithID} from '../Utils';

  /////////////////////////////// TO BE REPLACED ////////////////////////////////////
   let user = {
    id: "62b70ae15f1a0982a44bc2a9"
  };     
  //////////////////////////////////////////////////////////////////////////////////

function Profile (props) {
  const thisUser = getUserWithID(user.id);
    return (
      <div className="Profile">
            <ProfileCard user={thisUser}/>
      </div>
    );
  }

export default Profile;