import React, {useState} from 'react';
import '../../requests.css';
import axios from 'axios';

import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import StatusHistoryBtn from './statusHistoryBtn';
import GiveMoreInfo from './ReplyRequestBtn';
import InfoLogBtn from './InfoLog';

const UserBtns =(props) => {

    const userID = props.user.id;
    const reqStatus = props.req.status;  
    
    if(reqStatus === "Awaiting Allocation" || reqStatus === "Updated"){
        return(
            <div className="btnPanel">
                {/* Edit */}
                    <EditBtn req={props.req} userID = {userID}/>
                {/* Delete */}
                    <DeleteBtn reqID = {props.req._id}/>
            </div>
        );
    }
    // More Details requested by Employee
    else if (reqStatus === "Requires further information"){
        //requires more information.
        return(
            <div className="btnPanel">            
                    <GiveMoreInfo reqID={props.req._id} userID = {userID}/>
            </div>
        );
    }
    // More Detailsgiven by User - View all
    else if (reqStatus === "Information Provided"){
        //requires more information.
        return(
            <div className="btnPanel">            
                <InfoLogBtn reqID={props.req._id}/>
            </div>
        );
    }
    
    else{
        return(
            <div className="btnPanel">
                {/* View Status History */}
                    <StatusHistoryBtn reqID={props.req._id}/>  
            </div>
        )           
    }
}

export default UserBtns ;
