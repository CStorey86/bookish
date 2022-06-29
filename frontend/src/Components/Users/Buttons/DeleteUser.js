import React from 'react';
import '../users.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';



function deleteUserOn(){
    document.getElementById("deleteUser").style.display = "block";     
}

function deleteUserOff(){
    document.getElementById("deleteUser").style.display = "none";     
}



const DeleteUserBtn = (props) => { 

    function deleteUser(){

    }

    return(
        <>
            <button className="ActionBtn3" onClick={deleteUserOn}> Delete</button>
            {/* on click, show overlay with delete confirmation (y/n buttons)*/}          

            <div id="deleteUser">
                <div className="message">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={deleteUserOff}/> 
                    </div>
                    <h3>Are you sure you wish to delete this User?</h3>

                    <div className="overlayBtnPanel">
                        <button className="ActionBtn"  onClick={deleteUser}>Yes</button>
                        <button className="ActionBtn" onClick={deleteUserOff}>No</button>
                    </div>

                </div>                                            
            </div>
        </>
    )

}

export default DeleteUserBtn;

