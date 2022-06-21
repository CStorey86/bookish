import React from 'react';
import './users.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';


function resetPasswordOn(){
    document.getElementById("resetPasswords").style.display = "block";     
}

function resetPasswordOff(){
    document.getElementById("resetPasswords").style.display = "none";     
}



const ResetPassword = (props) => { 


    function sendPasswordReset(){

    }

    return(
        <>
            <button className="ActionBtn-3wide" onClick={resetPasswordOn}> Reset Password</button>
            {/* on click, show overlay with delete confirmation (y/n buttons)*/}          

            <div id="resetPasswords">
                <div className="message">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={resetPasswordOff}/> 
                    </div>
                    <h3>Are you sure you want to send this user an Email to reset their password?</h3>

                    <div className="overlayBtnPanel">
                        <button className="ActionBtn"  onClick={sendPasswordReset}>Yes</button>   
                        <button className="ActionBtn" onClick={resetPasswordOff}>No</button>
                    </div>

                </div>                                            
            </div>
        </>
    )

}

export default ResetPassword;

