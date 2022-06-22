import React from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'


function statusHistoryOn(){
    document.getElementById("statusHistory").style.display = "block";     
}

function statusHistoryOff(){
    document.getElementById("statusHistory").style.display = "none";     
}

class statusHistoryBtn extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            logs: [],
            reqID: props.reqID,     
        }
    }

    componentDidMount(){
        const logUrl=`http://localhost:4000/changelogs?requestID=${this.state.reqID}`;

        axios.get(logUrl)
        .then((Response) => {
            //set statusHistory[] as data recieved from api call
            this.setState({
                logs: Response.data     
            })
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render(){
        return(
            <>
                <button className="ActionBtn-med" onClick={statusHistoryOn}>View Request History</button>
                {/* on click, show overlay with edit form inputs*/}          

                <div id="statusHistory">
                    <div className="message2">

                        <div className="topClose">
                            <FontAwesomeIcon icon={faWindowClose} onClick={statusHistoryOff}/> 
                        </div>

                        <div className="statusHistoryList">
                            <h3>Status History - ID: {this.state.reqID}</h3>
                            <div className="RequestList" >
                                <table id="changeLogTable">
                                    <thead>
                                        <tr>
                                            <td>Date of Change</td>
                                            <td>Status Changed To</td>
                                            <td>Changed By</td>
                                        </tr>
                                    </thead>
                                    {this.state.logs.map((item) => (
                                    <tbody key={item._id}>
                                        <tr>
                                            {/* TO DO: CHANGE DATE FORMAT */}
                                            <td>{item.dateChange}</td>

                                            <td>{item.newStatus}</td>
                                            {/* TO DO: SHOW USER NAME - NOT ID */}
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
}

export default statusHistoryBtn

