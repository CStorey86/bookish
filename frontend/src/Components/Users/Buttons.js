import React from 'react';
import './users.css'

import EditUserBtn from './EditUserBtn';
import DeleteUserBtn from './DeleteUser';
import ResetPassword from './ResetPassword';

const Buttons = (props) => { 

//if no user selected ... show no buttons
    if(props.userID === undefined)
    {
        return(
            <div className="btnPanel"></div>
        )
    }
    else{
        return(
            <div className="btnPanel">
                {/* Edit */}
                    <EditUserBtn />
                {/* Delete */}
                    <DeleteUserBtn/>
                {/* Reset Password */}
                    <ResetPassword />
        </div>
        )
    }

}

export default Buttons;
