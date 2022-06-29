import React, {useState} from 'react';
import './home.css';
// import ChatBox from './ChatBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';


function chatOn(){
  document.getElementById("ChatOverlay").style.display = "block";     
}

function chatOff(){
  document.getElementById("ChatOverlay").style.display = "none";     
}

function ChatWindow (props){

  const [requestChoice, setRequest] = useState({});
  const isEmp = props.currentUser.isEmployee;
  // const [userTypeString, setUserTypeString] = useState("Chat with an Employee?");
 
  // if(isEmp){ setUserTypeString("Chat with a User?")};

    return (
      <div id="Chat">
        <div className="chatWindow">
        <h2>Chat</h2>
          <form id="chatEntryForm">
            <div className="FormRow">
              <label>Choose the title of the request you wish to chat about</label>
            </div>
            <div className="FormRow">
                <select value={requestChoice} onChange={(e)=>setRequest(e.target.value)}>
                    <option>--Select--</option>
                  {props.requests.map((item) => (
                    <option key={item._id}>{item.title}</option>
                
                  ))}
                </select>                 
            </div>
            <div className="FormRow">
              <button onClick={chatOn}>Start Chat</button>
              {/* ON CLICK - OPEN CHAT WINDOW (OVERLAY) */}
            </div>               
          </form>
        </div>

        <div id="ChatOverlay"> 
          <div className="message2">
            <div className="topClose">
                <FontAwesomeIcon icon={faWindowClose} onClick={chatOff} /> 
            </div>
            {/* <ChatBox requestChoice={this.state.requestChoice} user={props.curerntUser}
            /> */}
          </div>
           
        </div>
      </div>
    );
  
}

export default ChatWindow;