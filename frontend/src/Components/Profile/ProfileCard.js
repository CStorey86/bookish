import React from 'react';
import './profile.css';
import {formatDate} from '../Utils';
import AuthLimitRow from './AuthLimitRow';
import EditUserBtn from './EditUserBtn';
import ChangePassword from './ChangePasswordBtn';
import {getUserType} from '../Utils';


const ProfileCard =(props)=> {

    const createdDate = (props.thisUser.createdDate);

    var userType=getUserType(props.thisUser);

        return (
            <div className="profileCard">
                <h2>MY PROFILE</h2>
                
                <div className="profileRow">
                    <div className="profileRowleft">
                        FIRST NAME: 
                    </div>
                    
                    <div className="profileRowRight">
                        {props.thisUser.firstName}
                        
                    </div>
                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        LAST NAME:
                    </div>
                    <div className="profileRowRight">
                        {props.thisUser.lastName}
                    </div>
                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        EMAIL:
                    </div>
                    <div className="profileRowRight">
                        {props.thisUser.email}
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
                <AuthLimitRow isEmp ={props.thisUser.isEmployee} aLimit={props.thisUser.authLimit}/>
                
                <div className="overlayBtnPanel-wide">
                    <ChangePassword user={props.thisUser}/>
                    <EditUserBtn user={props.thisUser}/>
                </div>
            </div>
        );
}


export default ProfileCard;