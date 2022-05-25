import React,{Component} from 'react';
import './profile.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProfileCard from './ProfileCard';
import ProfileEditPanel from './ProfileEditPanel';
import axios from 'axios';


let user={
  id: "62860fe823c9c0ba976b9ba7",
  isEmp: true
}

class Profile extends Component {

  constructor(props){
    super(props);

    this.state={
        currentUser: {
            firstName:{},
            lastName:{},
            email:{},
            date_created:{},
            isAdmin: {},
            isEmployee:{}
        },
    }  
  }

  // componentDidMount(){

  //   axios.get(`http://localhost:4000/users/:${user.id}`)
  //     .then(response =>{
  //         this.setState({
  //           firstName: response.data.firstName,
  //           lastName: response.data.lastName,
  //           email: response.data.email,
  //           date_created: response.data.date_created,
  //           isAdmin: response.data.isAdmin ,
  //           isEmployee: response.data.isEmployee 
  //         })
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })

  // }

  render(){
    return (
      <div className="Profile">
            <NavBar />

            <ProfileCard user={this.state.currentUser}/>
            {/* <ProfileEditPanel user={this.state.currentUser}/> */}

            <Footer />
      </div>
    );
  }
}

export default Profile;