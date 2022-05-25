import React from 'react';
import './profile.css';


const ProfileCard = (props) =>{
        return (
            <div className="profileCard">
                <h2>USER PROFILE</h2>
                
                <div className="profileRow">
                    <div className="profileRowleft">
                        FIRST NAME: 
                    </div>
                    <div className="profileRowRight">
                        thisName
                    </div>
                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        LAST NAME:
                    </div>
                    <div className="profileRowRight">
                        thisName
                    </div>
                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        EMAIL:
                    </div>
                    <div className="profileRowRight">
                        thisEmail@email.com
                    </div>

                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        USER TYPE:
                    </div>
                    <div className="profileRowRight">
                        standard User
                    </div>
                </div>
                <div className="profileRow">
                    <div className="profileRowleft">
                        DATE CREATED:
                    </div>
                    <div className="profileRowRight">
                        day / month / year
                    </div>
                </div>

                <button className="ActionBtn-wide">Change Password</button>

                {/* ON CLICK - CHANGE PROFILEEDITPANEL CSS DISPLAY TO BLOCK */}
                <button className="ActionBtn-wide">Edit User Profile</button>

            </div>
    );
  }

export default ProfileCard;