import React from 'react';
import '../../requests.css'

import RequestInfo from './RequestInfoBtn';
import StatusHistoryBtn from './statusHistoryBtn';
import CompleteOrder from './CompleteOrderBtn';

const AuthBtns =(props) => {

    //authorise, request more info or view history
    return(
        <div className="btnPanel">
            {/*  Request more information */}
                <RequestInfo reqID={props.req._id} userID={props.user.id}/>
            {/* View Status History */}
                <StatusHistoryBtn reqID={props.req._id} logs={props.logs}/>  
            {/* Complete */}
                <CompleteOrder reqID={props.req._id} userID={props.user.id}/>                    
        </div>
    )
}

export default AuthBtns;



