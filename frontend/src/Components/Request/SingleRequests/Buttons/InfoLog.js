import React from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'


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
            currentInfoLogID: "",
            reqID: props.reqID,     
        }
        this.updateCurrentInfo = this.updateCurrentInfo.bind(this);
    }

    componentDidMount(){
        const logUrl=`http://localhost:4000/info/?requestID=${this.state.reqID}`;

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
                        <h3>Information Log - ID: {this.state.reqID}</h3>
                        <div>
                            {this.state.infoLogs.map((item) =>(
                                <div className="infoReqList" key={item._id}>
                                    <div className="infoLogItem" >
                                        <div className="infoID">Information Request: {item._id}</div>
                                        <div className="infoDate">Date Sent: {item.empMsgDate}</div>
                                    </div>
                                </div>
                            ))}
      
                        </div>
                            <div className="singleInfoRequest">
                                ID: {this.state.currentInfoLogID}
                            </div>


                    </div>

                                          
                </div>
            </>
        )
    }
}

export default infoLogBtn

