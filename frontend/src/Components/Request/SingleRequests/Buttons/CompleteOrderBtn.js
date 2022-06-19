import React,{Component,useState} from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function completeOn(){
    document.getElementById("completeRequest").style.display = "block";     
}

function completeOff(){
    document.getElementById("completeRequest").style.display = "none";     
}



const CompleteBtn =(props) => {

    function completeThisRequest(){
        //change status to complete
            //update parts
        //add changeLog entry
    }

    return(
        <>
            <button className="ActionBtn-wide" onClick={completeOn}> Complete Order</button>
            {/* on click, show overlay with delete confirmation (y/n buttons)*/}          

            <div id="completeRequest">
                <div className="message">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={completeOff}/> 
                    </div>
                    <h3>Are you sure you wish to complete this Request?</h3>
                    <button className="ActionBtn"  onClick={completeThisRequest}>Yes</button>
                        
                    <button className="ActionBtn" onClick={completeOff}>No</button>
                </div>                                            
            </div>
        </>
    )
}

export default CompleteBtn 
