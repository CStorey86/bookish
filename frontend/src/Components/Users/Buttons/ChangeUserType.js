import React, {useState} from 'react';
import '../users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from '../../../Api/axios';
import {getUserType, getUserName} from '../../Utils';

function ChangeUserTypeOn(){
    document.getElementById("ChangeUserType").style.display = "block";     
}

function ChangeUserTypeOff(){
    document.getElementById("ChangeUserType").style.display = "none";     
}

const ChangeUserType = (props) => { 

    const userType = getUserType(props.user);
    const [userTypeChoice, setUserTypeChoice] = useState("");
    const userID = useState(props.user._id);
    const userName = getUserName(props.user);

    function changeUserType(){
        
        const isAdmin = false;
        const isEmployee = false;
        
        if(userTypeChoice === "Authoriser"){
            isAdmin = true
        }
        else if(userTypeChoice === "Employee"){
            isEmployee = true;
        }

        const url=`/users/${userID}`;
        axios.put(url,
            {
                isAdmin: isAdmin,
                isEmployee: isEmployee,
            })
            .then(res => {
                alert(`${userName} has been made a ${userType}`)
                ChangeUserTypeOff();
            }
            )
            .catch((error) => {
                console.log(error);
            });
    }

    return(
        <>
            <button className="ActionBtn-3widest" onClick={ChangeUserTypeOn}> Change User Type</button>
            {/* on click, show overlay with delete confirmation (y/n buttons)*/}          

            <div id="ChangeUserType">
                <div className="message">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={ChangeUserTypeOff}/> 
                    </div>
                    <h3>Change User Type</h3>
                        <form id="changeUserType">
                            <div className="authFormSection">
                                <select value={userTypeChoice} onChange={(e)=>setUserTypeChoice(e.target.value)}>
                                    <option value={"default"}> {userType}</option>
                                    <option>Standard User</option>
                                    <option>Authoriser</option>
                                    <option>Employee</option>
                                </select>
                            </div>
                            <div className="authFormSection">
                                <button className="AuthBtn" >Change User Type</button>
                            </div>
                        </form>
                </div>                                            
            </div>
        </>
    )

}

export default ChangeUserType;

