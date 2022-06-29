import React from 'react';
import axios from '../../../Api/axios';
import '../requests.css';

import RequestListAll from './RequestListAll';
import SingleRequestAll from '../SingleRequests/SingleRequest-All';

class AllRequestDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            requests: [],
            notCompRequests: [],
            currentRequest: {},
            currentRequestID:"",
            userID: props.currentUser._id,   
            user: props.currentUser,       
        }
        this.updateCurrentRequest = this.updateCurrentRequest.bind(this);
    }

    componentDidMount(){
        const url= `/requests/`; 
        const notCompUrl = `/requests/?status!=${"Complete"}`;

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

        axios.get(notCompUrl)
        .then((Response) => {
          //set notCompRequests[] as data recieved from api call
          this.setState({
            notCompRequests: Response.data     
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
                    <RequestListAll activeRequests={this.state.notCompRequests} requests={this.state.requests} updateCurrentRequest={this.updateCurrentRequest} />
                </div>

                <div className="RightPanel">
                    <SingleRequestAll request={this.state.currentRequest} requestID={this.state.currentRequestID} 
                        user={this.state.user}/>
                </div>

            </div>
            
        );
        
        }
}

export default AllRequestDashboard;