import React from 'react';
import '../../requests.css'

import StatusHistoryBtn from './statusHistoryBtn';
import RequestInfo from './RequestInfoBtn';
import RequestAuthorisation from './RequestAuthBtn';
import CompleteOrder from './CompleteOrderBtn';

const EmployeeBtns =(props) => {

    if(props.req.status === "Allocated"){
        if(props.req.price <= props.user.authLimit){
            return(
                <div className="btnPanel">
                    {/*  Request more information */}
                        <RequestInfo reqID={props.req._id} userID={props.user.id}/>
                    {/* View Status History */}
                        <StatusHistoryBtn reqID={props.req._id} logs={props.logs}/>  
                    {/* Complete */}
                        <CompleteOrder reqID={props.req._id} userID={props.user.id}/>                    
                </div>
        )}
        else if(props.req.status === "Awaiting authorisation"){
            return(
                <div className="btnPanel">
                    {/* View Status History */}
                        <StatusHistoryBtn reqID={props.req._id} logs={props.logs}/> 
                </div>
            )
        }
        else{
            return(
                <div className="btnPanel">
                    {/* View Status History */}
                        <StatusHistoryBtn reqID={props.req._id} logs={props.logs}/> 
                    {/* Ask for Authorisation */} 
                        <RequestAuthorisation reqID={props.req._id} userID={props.user.id}/>
                </div>
                
        )}
    }
}

export default EmployeeBtns;
