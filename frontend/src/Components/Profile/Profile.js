import React,{Component} from 'react';
import './profile.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProfileCard from './ProfileCard';
import ProfileEditPanel from './ProfileEditPanel';
import axios from 'axios';

class Profile extends Component {

  constructor(props){
    super(props);

    this.state={
        currentUser: props.user,
        userID: props.user.id,
    }}

  componentDidMount(){

    const url =`http://localhost:4000/users/${this.state.userID}`;

    axios.get(url)
      .then(res =>{
          this.setState({
            currentUser: res.data
            //change to only pull needed data (not everything e.g.password)
          })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render(props){
    return (
      <div className="Profile">
            <NavBar isAuth={this.state.currentUser.isAuth} isEmp={this.state.currentUser.isEmp}/>

            <ProfileCard thisUser={this.state.currentUser} />

            {/* <ProfileEditPanel /> */}

            <Footer />
      </div>
    );
  }
}

export default Profile;