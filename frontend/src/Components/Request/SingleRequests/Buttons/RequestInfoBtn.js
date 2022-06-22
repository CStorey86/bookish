import React,{useState} from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function reqInfoOn(){
    document.getElementById("requestInfo").style.display = "block";     
}

function reqInfoOff(){
    document.getElementById("requestInfo").style.display = "none";     
}



const RequestInfo =(props) => {

    const [msgChoice, setMsg] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        // ADD REQUEST FOR MORE INFO
        const url=`http://localhost:4000/info`; 
        const changeUrl=`http://localhost:4000/requests/${props.reqID}`; 
        const addLogUrl =`http://localhost:4000/changelogs`;
        const newStatus = "Requires further information";
    
        axios.post(url,{
            requestID: props.reqID,
            infoReqBy: props.userID,
            empMsg: msgChoice,
            empMsgDate: Date.now(),
        })
          .then (res =>{
                // CHANGE STATUS
                axios.put(changeUrl,
                {
                        status: newStatus,
                })
                
                // ADD LOG
                axios.post(addLogUrl,
                    {
                        requestID: props.reqID,
                        newStatus: newStatus,
                        dateOfChange: Date.now(),
                        userID: props.userID
                    })

              console.log("Request for info Sent");
              alert(`Request for info Sent`);
              window.location.reload(false) 
          })
          .catch((error) => {
            console.log(error);
          });



    
    }

    return(
        <>
            <button className="ActionBtn-med" onClick={reqInfoOn}> Request Further Info</button>

            {/* on click, show overlay with delete confirmation (y/n buttons)*/}     
            <div id="requestInfo">
                <div className="message2">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={reqInfoOff}/> 
                    </div>

                    <h3>Request More information for order ID: {props.reqID}</h3>
                    <form onSubmit={handleSubmit}> 
                        <div className ="formRow">
                            <textarea className="infoInput" placeholder='Type your Message here..'
                                value={msgChoice} onChange={(e)=>setMsg(e.target.value)}
                            />
                        </div>

                        <div className ="formRow">
                            <input type="submit" value="SUBMIT" id="submitFormBtn" />
                        </div>
                        
                    </form>
       
                </div>                                      
            </div>

        </>
    )
}

export default RequestInfo