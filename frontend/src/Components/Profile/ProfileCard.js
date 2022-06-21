import React, {Component} from 'react';
import axios from 'axios';
import './profile.css';
import {formatDate} from '../Utils';


const ProfileCard =(props)=> {

    // const createdDate = props.user.createdDate;
    // var date = (formatDate(createdDate));
    // var userType='';


    // if((props.thisUser.isAdmin) === true){
    //     userType = 'Authoriser';
    // }
    // else if((props.thisUser.isEmployee) === true){
    //     userType = 'Employee';
    // }
    // else{
    //     userType = 'Standard User';
    // }

    
        return (
            <div className="profileCard">
                <h2>USER PROFILE</h2>
                
                <div className="profileRow">
                    <div className="profileRowleft">
                        FIRST NAME: 
                    </div>
                    
                    <div className="profileRowRight">
                        {}
                        
                    </div>
                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        LAST NAME:
                    </div>
                    <div className="profileRowRight">
                        {}
                    </div>
                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        EMAIL:
                    </div>
                    <div className="profileRowRight">
                        {}
                    </div>

                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        USER TYPE:
                    </div>
                    <div className="profileRowRight">
                        {}
                    </div>
                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        DATE CREATED:
                    </div>
                    <div className="profileRowRight">
                        {}
                    </div>
                </div>
                <div className="overlayBtnPanel-wide">
                    <button className="ActionBtn-wide">Change Password</button>

                    {/* ON CLICK - CHANGE PROFILE-EDIT-PANEL CSS DISPLAY TO BLOCK */}
                    <button className="ActionBtn-wide">Edit User Profile</button>
                </div>
            </div>
        );
}


export default ProfileCard;