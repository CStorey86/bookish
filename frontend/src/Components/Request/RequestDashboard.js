import React from 'react';
import axios from 'axios';
import './requests.css';

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
            logs: []            
        }
        this.updateCurrentRequest = this.updateCurrentRequest.bind(this);
    }

    componentDidMount(){

        if(this.state.isEmp === true)
        {
            const url= `http://localhost:4000/requests/?allocatedTo=${this.state.userID}`;
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
            const url= `http://localhost:4000/requests/?authorisedBy=${this.state.userID}`;
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
            const url= `http://localhost:4000/requests/?userID=${this.state.userID}`; 
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


        // GET CHANGE LOGS FOR THE SELECTED REQUEST - REGARDLESS OF USER
        const logUrl=`http://localhost:4000/changelogs?requestID=${this.state.currentRequestID}`;

        axios.get(logUrl)
        .then((Response) => {
            //set statusHistory[] as data recieved from api call
            this.setState({
                logs: Response.data     
            })
          })
          .catch((error) => {
            console.log(error);
          });
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
                    <RequestList requests={this.state.requests} updateCurrentRequest={this.updateCurrentRequest} />
                </div>

                <div className="RightPanel">
                    <SingleRequest request={this.state.currentRequest} logs={this.state.logs} user={this.state.user}/>
                </div>                    
            </div>
            
        );
        
        }
}

export default RequestDashboard;