import React,{Component,useState} from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../Api/axios';

function completeOn(){
    document.getElementById("completeRequest").style.display = "block";     
}

function completeOff(){
    document.getElementById("completeRequest").style.display = "none";     
}



const CompleteBtn =(props) => {

    function completeThisRequest(userID, reqID){

        const newStatus ="Complete";
        const date = Date.now();
    
        const updateURL=`/requests/${reqID}`;
        const addNewURL=`/changelogs`;
    
        // Change request details to "complete"
        axios.put(updateURL,
            {
                status: newStatus,
                dateStatusChange: date,
                isComplete: true,
                allocatedTo: "",
                authorisedBy: "",
            })
            .then(
                alert(`Request ID: ${reqID}, has been completed`),
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

            <button className="ActionBtn-med" onClick={completeOn}>Complete Order</button>
        
            {/* on click, show overlay with delete confirmation (y/n buttons)*/}          

            <div id="completeRequest">
                <div className="message">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={completeOff}/> 
                    </div>
                    <h3>Are you sure you wish to complete this Request?</h3>
                    
                    <div className="overlayBtnPanel">            
                        <button className="ActionBtn"  
                            onClick={() => completeThisRequest(props.userID, props.reqID)}>
                            Yes
                        </button>
                            
                        <button className="ActionBtn" onClick={completeOff}>No</button>
                    </div>


                </div>                                            
            </div>
        </>
    )

}

export default CompleteBtn 
