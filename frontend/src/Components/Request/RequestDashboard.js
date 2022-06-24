import React from 'react';
import axios from 'axios';
import './requests.css';
import {getUserName} from '../Utils';
import RequestList from './RequestList';
import SingleRequest from './SingleRequests/SingleRequest';



class RequestDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            requests: [],
            currentRequest: {},
            currentRequestID:"",
            user: props.currentUser,
            userID: props.currentUser.id,
            isEmp: props.currentUser.isEmployee,
            isAdmin: props.currentUser.isAdmin,
            comp: "false",
        }
        this.updateCurrentRequest = this.updateCurrentRequest.bind(this);
    }

    componentDidMount(){

        if(this.state.isEmp === true)
        {
            const showComp = `&isComplete=${this.state.comp}`;
   
            const url= `http://localhost:4000/requests/?allocatedTo=${this.state.userID}`+ showComp;

            axios.get(url)
            .then((Response) => {
              //set requests[] as data recieved from api call
              this.setState({
                requests: Response.data     
              })
            })
            .catch((error) => {
              console.log(error);
            }); 
        }
        else if(this.state.isAdmin === true)
        {
            const showComp = `&isComplete=${this.state.comp}`;
            const url= `http://localhost:4000/requests/?authorisedBy=${this.state.userID}`+ showComp;
            axios.get(url)
            .then((Response) => {
              //set requests[] as data recieved from api call
              this.setState({
                requests: Response.data     
              })
            })
            .catch((error) => {
              console.log(error);
            }); 
        }
        else{
            const showComp = `&isComplete=${this.state.comp}`;
            const url= `http://localhost:4000/requests/?userID=${this.state.userID}`+ showComp; 
            axios.get(url)
            .then((Response) => {
              //set requests[] as data recieved from api call
              this.setState({
                requests: Response.data     
              })
            })
            .catch((error) => {
              console.log(error);
            });
        }

    };

    updateCurrentRequest(item){
      this.setState({
          currentRequest: item,
          currentRequestID: item._id
      })
    }

    render(){
    
        return (
            <div className="RequestDashboard">
                <div className="LeftPanel">
                    <h2>MY REQUESTS </h2>
                    
                    <RequestList requests={this.state.requests} updateCurrentRequest={this.updateCurrentRequest} 
                      sort={""} search={""}/>
                </div>

                <div className="RightPanel">
                    <SingleRequest request={this.state.currentRequest} user={this.state.user}/>
                </div>                    
            </div>
            
        )}
}

export default RequestDashboard;