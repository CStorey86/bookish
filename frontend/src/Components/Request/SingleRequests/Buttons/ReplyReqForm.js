import React,{useState} from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../Api/axios';

function repInfoOn(){
    document.getElementById("replyInfo").style.display = "block";     
}

function repInfoOff(){
    document.getElementById("replyInfo").style.display = "none";     
}


function ReplyReqForm (props) {

    const reqID = props.reqID;
    const userID = props.userID;
    const infoID = props.infoID;
    const infoMsg = props.infoMsg;
    const empID = props.infoEmp;
    const emp = "Name Here";    //update to function getting name from empID
    const newStatus = "Information Provided";

    const [replyMsg, updateReplyMsg] = useState("");


    async function handleSubmit(event) {
        event.preventDefault();

        const url=`/info/${infoID}`; 
        const urlStatus=`/requests/${reqID}`; 
        const log_url=`/changelogs`; 

        // UPDATE INFO OBJECT ATTRIBUTES
            axios.put(url, {
                infoGivenBy: userID,
                userMsg: replyMsg,
                userMsgDate: Date.now(),
            })
            .then(
                alert(`Reply Sent to Information Request`),

                // CHANGE REQUEST STATUS
                    axios.put(urlStatus, {
                        status: newStatus
                    }),

                // ADD CHANGELOG ENTRY
                    axios.post(log_url,
                        {
                            requestID: reqID,
                            newStatus: newStatus,
                            dateOfChange: Date.now(),
                            userID: props.userID
                        })
            )
            .catch((error) => {
                console.log(error)
            });

            repInfoOff();                               // Closes panel
            window.location.reload(false);              // Refresh page
    }
  
    return (  
        <>
            <button className="ActionBtn-med" onClick={repInfoOn}> Give Further Information</button>

            {/* on click, show overlay with delete confirmation (y/n buttons)*/}     
            <div id="replyInfo">
                <div className="message2">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={repInfoOff}/> 
                    </div>

                    <h3>Provide More information for order ID: {reqID}</h3>
                    <form 
                        onSubmit={handleSubmit}
                    > 
                        <div className ="formRow">
                            <div id="query">Query: </div>
                            <div id="infoMsg">"{infoMsg}"</div>
                            <div id="infoEmp">From: {emp}</div>
                        </div>

                        <div className ="formRow">
                            <textarea className="infoInput2" placeholder='Type your Message here..'
                                value={replyMsg} onChange={(e)=>updateReplyMsg(e.target.value)} 
                            />
                        </div>

                        <div className ="formRow">
                            <input id="replyFormBtn" type="submit" value="SUBMIT" />
                        </div>
                        
                    </form>

                </div>                                      
            </div>

        </>
    );
}

export default ReplyReqForm;
