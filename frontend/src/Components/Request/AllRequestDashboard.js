import React from 'react';
import axios from 'axios';
import './requests.css';

import RequestList from './RequestList';
import SingleRequestAll from './SingleRequests/SingleRequest-All';

class AllRequestDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            requests: [],
            currentRequest: {},
            currentRequestID:"",
            userID: props.currentUser.id,   
            user: props.currentUser,       
        }
        this.updateCurrentRequest = this.updateCurrentRequest.bind(this);
    }

    componentDidMount(){
        const url= `http://localhost:4000/requests/`; 

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
    };

    updateCurrentRequest(item){
        this.setState({
            currentRequest: item,
            currentRequestID: item._id
        })
    }


    render(){
    
        return (
            <div>
                <div className="LeftPanel">
                    <h2>ALL REQUESTS </h2>
                    <RequestList requests={this.state.requests} updateCurrentRequest={this.updateCurrentRequest} />
                </div>

                <div className="RightPanel">
                    <SingleRequestAll request={this.state.currentRequest} user={this.state.user}/>
                </div>

            </div>
            
        );
        
        }
}

export default AllRequestDashboard;