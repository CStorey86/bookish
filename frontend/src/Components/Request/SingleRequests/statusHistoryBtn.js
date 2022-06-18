import React,{Component, useState} from 'react';
import '../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


function statusHistoryOn(){
    document.getElementById("statusHistory").style.display = "block";     
}

function statusHistoryOff(){
    document.getElementById("statusHistory").style.display = "none";     
}

const statusHistoryBtn = (props) => {

        const statusLogs = props.logs;

                return(
            <>
                <button className="ActionBtn-wide" onClick={statusHistoryOn}>View Request History</button>
                {/* on click, show overlay with edit form inputs*/}          

                <div id="statusHistory">
                    <div className="message2">

                        <div className="topClose">
                            <FontAwesomeIcon icon={faWindowClose} onClick={statusHistoryOff}/> 
                        </div>

                        <div className="statusHistoryList">
                            <h3>Status History</h3>
                            <div className="RequestList" >
                                <table id="changeLogTable">
                                    <thead>
                                        <tr>
                                            <td>Date of Change</td>
                                            <td>Status Changed To</td>
                                            <td>Changed By</td>
                                        </tr>
                                    </thead>
                                    {props.logs.map((item) => (
                                    <tbody key={item._id}>
                                        <tr>
                                            <td>{item.dateChange}</td>
                                            <td>{item.newStatus}</td>
                                            <td>{item.userID}</td>
                                        </tr>
                                    </tbody>
                                    ))}   
                                </table>
                                      
                                                

                               
                            </div>
                        </div>
                        
                    </div>                                            
                </div>
            </>
        )
}

export default statusHistoryBtn

