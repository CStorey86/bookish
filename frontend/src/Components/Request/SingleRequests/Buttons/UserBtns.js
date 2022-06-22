import React, {useState} from 'react';
import '../../requests.css';
import axios from 'axios';

import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import StatusHistoryBtn from './statusHistoryBtn';
import GiveMoreInfo from './ReplyRequestBtn';

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

            
                {/*  TO DO: More Info */}
                    <GiveMoreInfo reqID={props.req._id} />

                        
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
