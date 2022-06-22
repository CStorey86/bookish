import React,{Component, useState} from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { renderMatches } from 'react-router-dom';

function repInfoOn(){
    document.getElementById("replyInfo").style.display = "block";     
}

function repInfoOff(){
    document.getElementById("replyInfo").style.display = "none";     
}

class ReplyInfo extends Component {

    constructor(props){
        super(props);
        this.state={
            reqID: props.reqID,
            info: {},
            messsageChoice: "",
        }
    }
    
    componentDidMount(){
        //GET INFO ID USING REQ ID.
        const url= `http://localhost:4000/info/?requestID=${this.state.reqID}`;
        axios.get(url)
        .then((Response) => {
          //set requests[] as data recieved from api call
          this.setState({
            info: Response.data[0]
          })
        })
        .catch((error) => {
            console.log(error);
        }); 
    }

    getInfoID(info){
        const infoID = info._id;
        return infoID;
    }

    getInfoMsg(info){
        const message = info.empMsg;
        return message;
    }

    getInfoEmp(info){
        const emp = info.infoReqBy;
        return emp;
    }

    setMessageChoice(event){
        this.setState({
            messageChoice: ""
        })
    }




    processForm(){
        //update infoGivenBy,userMsg, and userMsgDate
           //then:
                //change status
                //add changeLog
    }

    render(){

        // const infoID = this.getInfoID(this.state.info);
        const message = this.getInfoMsg(this.state.info);
        // const emp = this.getInfoEmp(this.state.info);
        const emp = "name here";

        return(
            <>
                <button className="ActionBtn-med" onClick={repInfoOn}> Give Further Information</button>

                {/* on click, show overlay with delete confirmation (y/n buttons)*/}     
                <div id="replyInfo">
                    <div className="message2">
                        <div className="topClose">
                            <FontAwesomeIcon icon={faWindowClose} onClick={repInfoOff}/> 
                        </div>

                        <h3>Provide More information for order ID: {this.state.reqID}</h3>
                        <form > 
                            <div className ="formRow">
                                <div id="query">Query: </div>
                                <div id="infoMsg">"{message}"</div>
                                <div id="infoEmp">From: {emp}</div>
                            </div>

                            <div className ="formRow">
                                <textarea className="infoInput2" placeholder='Type your Message here..'
                                    // value={msgChoice} onChange={(e)=>setMsg(e.target.value)} 
                                />
                            </div>

                            <div className ="formRow">
                                <input id="replyFormBtn" type="submit" value="SUBMIT" />
                            </div>
                            
                        </form>
        
                    </div>                                      
                </div>

            </>
        )
    }
}

export default ReplyInfo