import React from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';

function changePasswordOn(){
    document.getElementById("changeThePassword").style.display = "block";     
}

function changePasswordOff(){
    document.getElementById("changeThePassword").style.display = "none";     
}

const changePassword =(props) => {

    function changeMyPassword(){
  
    }


    return(
        <>
            <button className="ActionBtn-wide" onClick={changePasswordOn}> Change Password</button>
            {/* on click, show overlay with delete confirmation (y/n buttons)*/}          

            <div id="changeThePassword">
                <div className="message">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={changePasswordOff}/> 
                    </div>
                    <h3>Change Password</h3>
                    <div className="overlayBtnPanel">
                        <button className="ActionBtn"  onClick={changeMyPassword}>Yes</button>  
                        <button className="ActionBtn" onClick={changePasswordOff}>No</button>
                    </div>

                </div>                                            
            </div>
        </>
    )
}

export default changePassword
