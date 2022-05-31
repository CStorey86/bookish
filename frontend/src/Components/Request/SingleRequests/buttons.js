import React,{Component} from 'react';
import '../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import {
    deleteOn, deleteOff, editOn, editOff, deleteRequest,
} from './buttonFunctions';


const Buttons =(props) => {

    if(props.status === undefined){
        return(
            <></>
        )
    }
    else if(props.status == "Awaiting Allocation")             // any stage after allocation
    {
        const reqId=props.reqId;

        return(
            <>
                <button className="ActionBtn" onClick={editOn}>Edit</button>
                {/* on click, show overlay showing form for editing request */}

                <button className="ActionBtn" onClick={deleteOn}> Delete</button>
                {/* on click, show overlay with delete confirmation (y/n buttons)*/}          


                <div id="deleteRequest">
                    <div className="message">
                        <div className="topClose">
                            <FontAwesomeIcon icon={faWindowClose} onClick={deleteOff}/> 
                        </div>
                        <h3>Are you sure you wish to delete this Request?</h3>
                        <button className="ActionBtn" onClick={deleteRequest}>Yes</button>
                         
                        <button className="ActionBtn" onClick={deleteOff}>No</button>
                    </div>                                            
                </div>

                <div id="editRequest">
                    <div className="message2">
                        <div className="topClose">
                            <FontAwesomeIcon icon={faWindowClose} onClick={editOff}/> 
                        </div>
                        <h2>Edit Request</h2>
                        <button className="ActionBtn-wide" onClick={deleteRequest}>Save Changes</button>

                    </div>                                            
                </div>

            </>
        );
    }
    else if(props.status  === "Requires further information"){
        return(
            <>
                <button className="ActionBtn-wide" >Add further Information</button>
                {/* on click, show overlay form to add more details */}

    
            </>
        )
    }
    else {
        return(
            <>
                <button className="ActionBtn-wide" >View Status History</button>
                {/* on click, show overlay listing status history and dates */}

            </>
        );
    }


}

export default Buttons;

//Requires further information