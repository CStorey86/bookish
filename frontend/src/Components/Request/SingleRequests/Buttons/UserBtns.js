import React from 'react';
import '../../requests.css'

import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import StatusHistoryBtn from './statusHistoryBtn';

const UserBtns =(props) => {

    const userID = props.user.id;
    const limit =  props.user.authLimit;
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
                    <StatusHistoryBtn reqID={props.req._id}/>  
            </div>
        )           
    }
}

export default UserBtns ;
