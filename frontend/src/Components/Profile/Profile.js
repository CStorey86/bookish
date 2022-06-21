import React from 'react';
import './profile.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProfileCard from './ProfileCard';
// import ProfileEditPanel from './ProfileEditPanel';


function Profile (props) {

    const currentUser = props.user;

    return (
      <div className="Profile">
            <NavBar isAuth={currentUser.isAdmin} isEmp={currentUser.isEmployee}/>

            <ProfileCard user={currentUser}/>

            <Footer />
      </div>
    );
  }

export default Profile;