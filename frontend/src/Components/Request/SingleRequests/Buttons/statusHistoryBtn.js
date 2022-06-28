import React from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../Api/axios';
import {formatDate} from '../../../Utils';


function statusHistoryOn(){
    document.getElementById("statusHistory").style.display = "block";     
}

function statusHistoryOff(){
    document.getElementById("statusHistory").style.display = "none";     
}

class StatusHistoryBtn extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            logs: [],
            reqID: props.reqID,     
        }
    }

    componentDidMount(){
        const logUrl=`/changelogs?requestID=${this.state.reqID}`;

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

                            <div className="RequestList2" >
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
                                            <td>{formatDate(item.dateChange)}</td>

                                            {/* formatDate() */}

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

export default StatusHistoryBtn

