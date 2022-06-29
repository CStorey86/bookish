import React, {useState, Component} from 'react';
import './home.css';
import axios from '../../Api/axios';

import Dashboard from './Dashboard';
import ChatWindow from './ChatWindow';

// GET USER FROM STORED LOGIN TOKEN 
function getUser(){
    const user = localStorage.getItem('user');
    let currentUser ={};
    if(user != null)
    {
      currentUser = JSON.parse(user);
    }
    return currentUser;
}

class Home extends Component {


  constructor(props){
    super(props);
    this.state={
        requests: [],
        closedRequests:[],
        user: getUser(),
        userID: getUser()._id,
    }
    // this.updateCurrentRequest = this.updateCurrentRequest.bind(this);
  } 

  componentDidMount(){
    var closedUrl=""; 
    var allUrl =""; 
    // SET URL BASED ON USERTYPE
    if (this.state.isAdmin === true)
    {
      closedUrl = `/requests/?authorisedBy=${this.state.userID}&status=Complete`;
      allUrl = `/requests/?authorisedBy=${this.state.userID}`;
    }
    else if(this.state.isEmployee){
      closedUrl = `/requests/?allocatedTo=${this.state.userID}&status=Complete`;
      allUrl = `/requests/?allocatedTo=${this.state.userID}`;
    }
    else{
      closedUrl=`/requests/?userID=${this.state.userID}&status=Complete`; 
      allUrl =`/requests/?userID=${this.state.userID}`; 
    }

    // GET REQUESTS BASED ON PARAMETERS
    
    axios.get(closedUrl)
    .then((Response) => {
      //set closedRequests[] as data recieved from api call
      this.setState({
        closedRequests: Response.data     
      })
    })
    .catch((error) => {
      console.log(error);
    });

    axios.get(allUrl)
    .then((Response) => {
      //set requests[] as data recieved from api call
      this.setState({
        requests: Response.data     
      })
    })
    .catch((error) => {
      console.log(error);
    });
  };


  
render(){
    return (
      <div className="Home">
          <Dashboard currentUser={this.state.user} requests={this.state.requests} closedRequests={this.state.closedRequests} />
          <ChatWindow currentUser={this.state.user} requests={this.state.requests} />
      </div>
    );
 }
}

export default Home;
