import React from 'react';
import axios from '../../Api/axios';
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
            userID: props.currentUser._id,         
            isEmp: props.currentUser.isEmployee,  
            isAdmin: props.currentUser.isAdmin,  
        }
        this.updateCurrentRequest = this.updateCurrentRequest.bind(this);
    }

    componentDidMount(){
      var url=``;
      
      // SET URL BASED ON USERTYPE
      if(this.state.isAdmin === true){
        url= `/requests/?authorisedBy=${this.state.userID}`;
      }
      else if (this.state.isEmp === true){   
        url= `/requests/?allocatedTo=${this.state.userID}`;
      }
      else{
        url= `/requests/?userID=${this.state.userID}`; 
      }

      // GET REQUESTS BASED ON PARAMETERS
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
            <div className="RequestDashboard">
                <div className="LeftPanel">
                    <h2>MY REQUESTS </h2>
                    <RequestList requests={this.state.requests} updateCurrentRequest={this.updateCurrentRequest} />
                </div>

                <div className="RightPanel">
                    <SingleRequest request={this.state.currentRequest} user={this.state.user}/>
                </div>                    
            </div>
            
        )}
}

export default RequestDashboard;