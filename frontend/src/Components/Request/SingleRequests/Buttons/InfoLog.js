import React from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../Api/axios';
import {formatDate} from '../../../Utils';


function infoLogOn(){
    document.getElementById("infoLog").style.display = "block";     
}

function infoLogOff(){
    document.getElementById("infoLog").style.display = "none";     
}

class infoLogBtn extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            infoLogs: [],
            currentInfoLog: {},
            currentInfoLogID: "test",
            reqID: props.reqID,     
        }
        this.updateCurrentInfo = this.updateCurrentInfo.bind(this);
    }

    componentDidMount(){
        const logUrl=`/info/?requestID=${this.state.reqID}`;

        axios.get(logUrl)
        .then((Response) => {
            //set infoLogs[] as data recieved from api call
            this.setState({
                infoLogs: Response.data     
            })
          })
          .catch((error) => {
            console.log(error);
          });
    }

    updateCurrentInfo(item){
        this.setState({
            currentInfoLog: item,
            currentInfoLogID: item._id
        })
    }

    render(){

        const hasReply = false;

        return(
            <>
                <button className="ActionBtn-med" onClick={infoLogOn}>View Information Requests</button>
                
                {/* on click, show overlay with infomation logs*/}          
                <div id="infoLog">
                    <div className="message3">
                        <div className="topClose">
                            <FontAwesomeIcon icon={faWindowClose} onClick={infoLogOff}/> 
                        </div>
                        <div className="statusHistoryList">
                            <h3>Status History - ID: {this.state.reqID}</h3>

                            <div className="RequestList" >
                                <table id="infoLogTable">
                                    <thead>
                                        <tr>
                                            <td className="colMed">Date Info Request Created</td>
                                            <td className="colMed">Employee Name</td>
                                            <td className="colLrg">Information Requested</td>
                                            <td className="colMed">Date of Reply</td>
                                            <td className="colLrg">Reply</td>
                                        </tr>
                                    </thead>
                                    {this.state.infoLogs.map((item) => (
                                    <tbody key={item._id}>
                                        <tr>
                                            <td>{formatDate(item.empMsgDate)}</td>
                                            {/* get user details from id... then get name */}
                                            <td>{item.infoReqBy}</td> 
                                            <td>{item.empMsg}</td>
                                            <td>{formatDate(item.empMsgDate)}</td>
                                            <td>{item.userMsg}</td>
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

export default infoLogBtn

