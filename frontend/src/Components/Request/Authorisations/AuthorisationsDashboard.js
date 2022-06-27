import React,{Component} from 'react';
import axios from 'axios';
import './authorisations.css';

import AwaitingAuthorisation from './AwaitingAuthorisation';
import MyAuthorisations from './MyAuthorisations';

class Authorisations extends Component {

  constructor(props){
    super(props);
    this.state={
        available: [],
        currentUserID: props.currentUser.id,
        myAuthorisations: [],
    }
  }

  componentDidMount(){
    const url= `http://localhost:4000/requests/?status=Awaiting authorisation`; 
    const ownUrl= `http://localhost:4000/requests/?authorisedBy=${this.state.currentUserID}`;

    //GET ALL REQUESTS AWAITING AUTHORISATION
    axios.get(url)
      .then((Response) => {
        //set available[] as data recieved from api call
        this.setState({
             available: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });

    //GET AUTHORISATIONS ASSIGNED TO THIS USER ONLY
    axios.get(ownUrl)
      .then((Response) => {
        //set available[] as data recieved from api call
        this.setState({
             myAuthorisations: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render(){
    return (
      <div className="Authorisations">

        <div className="LeftPanel">
          <h2>Awaiting Authorisation</h2>
          <AwaitingAuthorisation available={this.state.available} userID={this.state.currentUserID}/>
        </div>

        <div className="RightPanel">
          <h2>My Authorisations</h2>
          <MyAuthorisations myAuthorisations={this.state.myAuthorisations} userID={this.state.currentUserID}/>
        </div>          
            

      </div>
    );








  }
}

export default Authorisations;
