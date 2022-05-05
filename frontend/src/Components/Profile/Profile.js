import React,{Component} from 'react';
import './profile.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProfileCard from './ProfileCard';
import ProfileEditPanel from './ProfileEditPanel';


class Profile extends Component {
  render(){
    return (
      <div className="Profile">
            <NavBar />

            <ProfileCard />
            <ProfileEditPanel/>

            <Footer />
      </div>
    );
  }
}

export default Profile;