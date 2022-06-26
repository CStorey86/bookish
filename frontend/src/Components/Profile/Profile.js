import React from 'react';
import './profile.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProfileCard from './ProfileCard';


function Profile (props) {

      /////////////////////////////// TO BE REPLACED ////////////////////////////////////
      const user = null;          
      // const isEmp = user.isEmployee;
      // const isAuth = user.isAdmin;
      
      ///////////////////////////////////////////////////////////////////////////////////

    const currentUser = user;

    return (
      <div className="Profile">
            <ProfileCard user={currentUser}/>
      </div>
    );
  }

export default Profile;