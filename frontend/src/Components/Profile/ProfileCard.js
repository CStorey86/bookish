import React from 'react';
import './profile.css';
import {formatDate} from '../Utils';
import AuthLimitRow from './AuthLimitRow';


const ProfileCard =(props)=> {

    const createdDate = (props.user.createdDate);

    var userType='';

    if((props.user.isAdmin) === true){
        userType = 'Authoriser';
    }
    else if((props.user.isEmployee) === true){
        userType = 'Employee';
    }
    else{
        userType = 'Standard User';
    }

    
        return (
            <div className="profileCard">
                <h2>MY PROFILE</h2>
                
                <div className="profileRow">
                    <div className="profileRowleft">
                        FIRST NAME: 
                    </div>
                    
                    <div className="profileRowRight">
                        {props.user.firstName}
                        
                    </div>
                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        LAST NAME:
                    </div>
                    <div className="profileRowRight">
                        {props.user.lastName}
                    </div>
                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        EMAIL:
                    </div>
                    <div className="profileRowRight">
                        {props.user.email}
                    </div>

                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        USER TYPE:
                    </div>
                    <div className="profileRowRight">
                        {userType}
                    </div>
                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        DATE CREATED:
                    </div>
                    <div className="profileRowRight">
                        {formatDate(createdDate)}
                    </div>
                </div>
                {/* IF EMPLOYEE */}
                <AuthLimitRow isEmp ={props.user.isEmployee} aLimit={props.user.authLimit}/>
                
                <div className="overlayBtnPanel-wide">
                    <button className="ActionBtn-wide">Change Password</button>
                    <button className="ActionBtn-wide">Edit User Profile</button>
                </div>
            </div>
        );
}


export default ProfileCard;