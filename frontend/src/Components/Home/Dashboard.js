import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './home.css';
import {countNumberInArray, getUserName} from '../Utils';



function Dashboard (props){
  
  const requests = props.requests;
  const closedRequests = props.closedRequests;
  var countClosed = countNumberInArray(closedRequests);
  var countOpen = countNumberInArray(requests);
  var userName = useState(getUserName(props.currentUser));
    
        return (
          <div>
            <div className="Dashboard">
              <div className="BigPanel">
                <h2>Welcome {userName}</h2>
                <Link to="/Requests">
                  <div className="PanelItem">
                    <p>You have {countOpen} open requests</p>
                  </div>
                </Link>
                <Link to="/Requests ">
                  <div className="PanelItem">
                    <p>You have {countClosed} complete requests</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      
}

export default Dashboard;