import React from 'react';
import '../../requests.css'

import StatusHistoryBtn from './statusHistoryBtn';
// import RequestMoreInfo from './Buttons/RequestInfoBtn';
import RequestAuthorisation from './RequestAuthBtn';
// import CompleteOrder from './Buttons/CompleteOrderBtn';

const EmployeeBtns =(props) => {

    if(props.req.status === "Allocated"){
        if(props.req.price <= props.user.authLimit){
            return(
                <div className="btnPanel">
                    {/*  Request more information */}
                        {/* <RequestMoreInfo /> */}
                    {/* View Status History */}
                        {/* <StatusHistoryBtn reqID={props.req._id} logs={props.logs}/>   */}
                    {/* Complete */}
                        {/* <CompleteOrder reqID={props.req._id}/> */}
                    <p>can complete</p>
                    
                </div>
        )}
        else{
            return(
                <div className="btnPanel">
                    {/* View Status History */}
                        <StatusHistoryBtn reqID={props.req._id} logs={props.logs}/> 
                    {/* Ask for Authorisation */} 
                        <RequestAuthorisation />
                </div>
                
        )}
    }
}

export default EmployeeBtns;
