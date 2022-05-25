import React,{Component} from 'react';
import './profile.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProfileCard from './ProfileCard';
import ProfileEditPanel from './ProfileEditPanel';
import axios from 'axios';

const user={
  id: '62860fe823c9c0ba976b9ba7'
}

class Profile extends Component {

  constructor(props){
    super(props);

    this.state={
        currentUser: {},
    }}

  componentDidMount(){

    const url =`http://localhost:4000/users/${user.id}`;

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

  render(){
    return (
      <div className="Profile">
            <NavBar />

            <ProfileCard thisUser={this.state.currentUser} />

            {/* <ProfileEditPanel /> */}

            <Footer />
      </div>
    );
  }
}

export default Profile;