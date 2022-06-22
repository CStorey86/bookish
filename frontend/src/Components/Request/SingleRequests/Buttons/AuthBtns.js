import React from 'react';
import '../../requests.css'

import RequestInfo from './RequestInfoBtn';
import StatusHistoryBtn from './statusHistoryBtn';
import AuthoriseOrderBtn from './AuthoriseOrderBtn';

const AuthBtns =(props) => {

    //authorise, request more info or view history
    return(
        <div className="btnPanel">
            {/*  Request more information */}
                <RequestInfo reqID={props.req._id} userID={props.user.id}/>
            {/* View Status History */}
                <StatusHistoryBtn reqID={props.req._id} />  
            {/* Complete */}
                <AuthoriseOrderBtn  reqID={props.req._id} userID={props.user.id} isAdmin={props.user.isAdmin}/>                    
        </div>
    )
}

export default AuthBtns;



