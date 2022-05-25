import React from 'react';
import './profile.css';


function formatDate(inputDate){
    const newDate = new Date(inputDate);
    return String(newDate);
}

const ProfileCard = (props) =>{

    var userType='';
    var date = (formatDate(props.thisUser.createdDate))

    if((props.thisUser.isAdmin) === true){
        userType = 'Authoriser';
    }
    else if((props.thisUser.isEmployee) === true){
        userType = 'Employee';
    }
    else{
        userType = 'Standard User';
    }

    
    return (
        <div className="profileCard">
            <h2>USER PROFILE</h2>
            
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
                    {date}
                </div>
            </div>

            <button className="ActionBtn-wide">Change Password</button>

            {/* ON CLICK - CHANGE PROFILE-EDIT-PANEL CSS DISPLAY TO BLOCK */}
            <button className="ActionBtn-wide">Edit User Profile</button>

        </div>
    );
  }

export default ProfileCard;