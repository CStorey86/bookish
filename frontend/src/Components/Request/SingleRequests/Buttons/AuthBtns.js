import React from 'react';
import '../../requests.css'

import RequestInfo from './RequestInfoBtn';
import StatusHistoryBtn from './StatusHistoryBtn';
import AuthoriseOrderBtn from './AuthoriseOrderBtn';

const AuthBtns =(props) => {

    //authorise or view history
    return(
        <div className="btnPanel">
            {/* View Status History */}
                <StatusHistoryBtn reqID={props.req._id} />  
            {/* Complete */}
                <AuthoriseOrderBtn  reqID={props.req._id} userID={props.user._id} isAdmin={props.user.isAdmin}/>                    
        </div>
    )
}

export default AuthBtns;



