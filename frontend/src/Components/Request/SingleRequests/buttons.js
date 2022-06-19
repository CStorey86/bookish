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
            <AuthBtns user={props.currentUser} req={props.request} logs={props.logs}/>
        )
    }

    // User is an Employee
    else if(props.currentUser.isEmployee ===  true){
        return(
            <EmployeeBtns user={props.currentUser} req={props.request} logs={props.logs} />
    )}

    // User is a standard User
    else{
        return(
            <UserBtns user={props.currentUser} req={props.request} logs={props.logs}/>
        )
    }



}

export default Buttons;
