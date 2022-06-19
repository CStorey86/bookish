import React from 'react';
import '../../requests.css'

import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import StatusHistoryBtn from './statusHistoryBtn';

const UserBtns =(props) => {

    const userID = props.currentUser.id;
    const limit =  props.currentUser.authLimit;
    const reqStatus = props.request.status;     

    if(reqStatus === "Awaiting Allocation" || reqStatus === "Updated"){
        return(
            <div className="btnPanel">
                {/* Edit */}
                    <EditBtn req={props.request} userID = {userID}/>
                {/* Delete */}
                <DeleteBtn reqID = {props.request._id}/>
            </div>
        );
    }
    // More Details requested by Employee
    else if (reqStatus === "Requires More Information"){
        //requires more information.
        return(
            <div className="btnPanel">
                {/*  TO DO: More Info */}
                        <button className="ActionBtn-wide" >Add further Information</button>
            </div>
        );
    }
    else{
        return(
            <div className="btnPanel">
                {/* View Status History */}
                    <StatusHistoryBtn reqID={props.request._id} logs={props.logs}/>  
            </div>
        )           
    }
}

export default UserBtns ;
