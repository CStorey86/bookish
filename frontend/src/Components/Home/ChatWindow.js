import React, {useState} from 'react';
import './home.css';


function ChatWindow (props){

  const [requestChoice, setRequest] = useState({});

    return (
      <div id="Chat">
        <div className="chatWindow">
        <h2>Chat with an Employee?</h2>
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
              <button>Start Chat</button>
              {/* ON CLICK - OPEN CHAT WINDOW (OVERLAY) */}
            </div>               
          </form>
        </div>

        <div id="ChatOverlay"></div>

      </div>
    );
  
}

export default ChatWindow;