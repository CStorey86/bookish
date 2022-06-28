import React,{useState} from 'react';
import '../users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';




function editUserOn(){
    document.getElementById("editUser").style.display = "block";     
}

function editUserOff(){
    document.getElementById("editUser").style.display = "none";     
}

const EditUserBtn =(props) => {

    function editRequest(){

    }

    return(
        <>
            <button className="ActionBtn3" onClick={editUserOn}> Edit</button>
            {/* on click, show overlay with edit form inputs*/}          

            <div id="editUser">
                <div className="message2">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={editUserOff}/> 
                    </div>

                    <div className="editRequestForm">
                        <h3>Edit Request</h3>
                       
                    </div>
                </div>                                            
            </div>
        </>
    )
}


export default EditUserBtn;
