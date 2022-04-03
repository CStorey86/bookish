import React,{Component} from 'react';
import './home.css';

import RequestList from '../Request/RequestList';
import SingleRequest from '../Request/SingleRequest';
import AllocateList from '../Request/Allocate';

export function Dashboard(userType){
    if(userType==="Employee"){
      return(
        <div className="MainContent">
          {/* Admin dashboard */}
          <AllocateList/>
        </div>
      );
    }
    else if(userType==="Authoriser"){
      return(
        <div className="MainContent">
            {/* Auth dashboard*/}
            <AllocateList/>
        </div>
      );
    }
    else
    {
      return (
        <div className="MainContent">
            {/* Standard User dashboard*/}
            <RequestList />
            <SingleRequest />
        </div>
      );
    }
}