import React from 'react';
import '../users.css';

import EditUserBtn from './EditUserBtn';
import DeleteUserBtn from '../DeleteUser';
import ResetPassword from './ResetPassword';
import ChangeUserType from './ChangeUserType';
import ChangeAuthLimit from './ChangeAuthLimit';


const Buttons = (props) => { 

//if no user selected ... show no buttons
    if(props.user._id === undefined)
    {
        return(
            <div className="btnPanel"></div>
        )
    }
    else{
        return(
            <>
                <div className="btnPanel">
                    {/* Edit */}
                        <EditUserBtn user={props.user}/>
                    {/* Delete */}
                        <DeleteUserBtn user={props.user}/>
                    {/* Reset Password */}
                        <ResetPassword user={props.user}/>
                    {/* Change User Typy */}
                        <ChangeUserType user={props.user}/>
                    {/* Change Auth Limit */}
                        <ChangeAuthLimit user={props.user}/>
                </div>
            </>
        )
    }

}

export default Buttons;
