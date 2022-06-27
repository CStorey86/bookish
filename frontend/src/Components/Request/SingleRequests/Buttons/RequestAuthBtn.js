import React,{Component,useState} from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function reqAuthOn(){
    document.getElementById("requestAuth").style.display = "block";     
}

function reqAuthOff(){
    document.getElementById("requestAuth").style.display = "none";     
}


const RequestAuthorisation =(props) => {

    function requestAuthorisation(userID, reqID){
      
        const newStatus ="Awaiting authorisation";
        const date = Date.now();
    
        const updateURL=`http://localhost:4000/requests/${reqID}`;
        const addNewURL=`http://localhost:4000/changelogs`;
    
        axios.put(updateURL,
            {
                status: newStatus,
                dateStatusChange: date,
            })
            .then(
                alert(`Request ID: ${reqID}, has been sent to authorisation`),
                //log allocation & status change in changelogs
                axios.post(addNewURL,
                    {
                        requestID: reqID,
                        newStatus: newStatus,
                        userID: userID,
                        dateChange: date,
                    })
                    .then(
                        window.location.reload(false) 
                    )
                    .catch((error) => {
                        console.log(error);
                    })
            )
            .catch((error) => {
                console.log(error);
            });
    }

    return(
        <>
            <button className="ActionBtn-med" onClick={reqAuthOn}> Request Authorisation</button>
            
            {/* on click, show overlay with delete confirmation (y/n buttons)*/}     
            <div id="requestAuth">
                <div className="message">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={reqAuthOff}/> 
                    </div>
                    <h3>Are you sure you wish to Request Authorisation?</h3>

                    <div className="overlayBtnPanel">
                        <button className="ActionBtn"  
                            onClick={() => requestAuthorisation(props.userID, props.reqID)}>
                                Yes
                        </button>
                            
                        <button className="ActionBtn" onClick={reqAuthOff}>No</button>
                    </div>

                </div>                                            
            </div>
        </>
    )
}

export default RequestAuthorisation
