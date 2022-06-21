import React from 'react';
import './profile.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProfileCard from './ProfileCard';
// import ProfileEditPanel from './ProfileEditPanel';


function Profile (props) {

    const user = props.user;

    return (
      <div className="Profile">
            <NavBar isAuth={user.isAdmin} isEmp={user.isEmployee}/>

            <ProfileCard 
              user={user}
              
            />

            <Footer />
      </div>
    );
  }

export default Profile;