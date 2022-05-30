import React from 'react';
import axios from 'axios';
import './requests.css';

import RequestList from './RequestList';
import SingleRequest from './SingleRequests/SingleRequest';

//to be passed from token
let user={
    id: "62860fe823c9c0ba976b9ba7",
    isEmp: true
}

class RequestDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            requests: [],
            currentRequest: {},
        }
        this.updateCurrentRequest = this.updateCurrentRequest.bind(this);
    }

    componentDidMount(){
        const url=`http://localhost:4000/requests/?userID=${user.id}`; 

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
        })
    }

    render(){
    
        return (
            <div>
                <div className="LeftPanel">
                    <h2>MY REQUESTS </h2>
                    <RequestList requests={this.state.requests} updateCurrentRequest={this.updateCurrentRequest} />
                </div>

                <div className="RightPanel">
                    <SingleRequest request={this.state.currentRequest}/>
                </div>
                    

                    
            </div>
            
        );
        
        }
}

export default RequestDashboard;