import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './home.css';
import axios from 'axios';


let user={
  id: "62860fe823c9c0ba976b9ba7",
}

// function getCompleteRequestCounts(closedArray){
//   var completeCount = closedArray.length();
//   return {completeCount};
// }

// function getOpenRequestCounts(allArray, closedArray){
//     var openCount = (allArray.length) -(closedArray.length);  
//     return {openCount};
// }


class Dashboard extends Component{
  
  constructor(props){
    super(props);
    this.state={
        requests: [],
        closedRequests: [],
    }
  }

  componentDidMount(){
    const closedUrl=`http://localhost:4000/requests/?userID=${user.id}&status=Complete`; 
    const allUrl =`http://localhost:4000/requests/?userID=${user.id}`; 
    
    axios.get(closedUrl)
    .then((Response) => {
      //set requests[] as data recieved from api call
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
    var countClosed=this.state.closedRequests.length;
    var countOpen=(this.state.requests.length)-(countClosed);
    
        return (
          <div>
            <div className="Dashboard">
              <div className="LeftPanel">
                <h2>Welcome </h2>
                {/* Summary Panel */}

                <Link to="/Requests">
                  <div className="PanelItem">
                    <p>You have {countOpen} open requests</p>
                    {/* /on click - open my requests page -filtering to show only open requests */}
                  </div>
                </Link>

                <Link to="/Requests ">
                  <div className="PanelItem">
                    <p>You have {countClosed} complete requests</p>
                    {/* /on click - open my requests page -filtering to show only closed requests */}
                  </div>
                </Link>
              </div>

              {/* Notifictaion Panel */}
              <div className="RightPanel">
                  <h2>Notifications</h2>
                  <p>You have no Notifications</p>
              </div>
            </div>
          </div>
        );
      }
}

export default Dashboard;