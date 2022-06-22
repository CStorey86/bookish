import React from 'react';
import '../requests.css'

import AuthBtns from './Buttons/AuthBtns';
import UserBtns from './Buttons/UserBtns';
import EmployeeBtns from './Buttons/EmployeeBtns';

const Buttons =(props) => { 

    if(props.request.status === undefined)
    {
        return(
            <div className="btnPanel">
            </div>
        )
    }
    // User is an Authorisor
    else if(props.currentUser.isAdmin ===  true){
        return(
            <div>
                <AuthBtns user={props.currentUser} req={props.request} />
            </div>
            
        )
    }

    // User is an Employee
    else if(props.currentUser.isEmployee ===  true){
        return(
            
            <div>
                <EmployeeBtns user={props.currentUser} req={props.request} />
            </div>
    )}

    // User is a standard User
    else{
        return(
            <div>
                <UserBtns user={props.currentUser} req={props.request} />
            </div>
        )
    }

}

export default Buttons;
