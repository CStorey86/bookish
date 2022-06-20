import React,{Component,useState} from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const RequestInfo =(props) => {


    return(
        <>
            <button className="ActionBtn-med"> Request Further Info</button>

            {/* on click, show overlay with delete confirmation (y/n buttons)*/}     
            <div id="requestAuth">
                <div className="message">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} /> 
                    </div>
                    <h3>Are you sure you wish to Request Authorisation?</h3>
                    <button className="ActionBtn"  
                        // onClick={() => requestAuthorisation(props.userID, props.reqID)}
                    >
                            Yes
                    </button>
                        
                    <button className="ActionBtn" >No</button>
                </div>                                            
            </div>

        </>
    )
}

export default RequestInfo