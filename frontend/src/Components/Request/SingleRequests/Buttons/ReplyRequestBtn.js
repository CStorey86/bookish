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
            infoID: "",
            empMsg: "",
        }
    }

    getInfoID(info){
        this.setState({
            infoID: info._id
        })
    }
    
    componentDidMount(){
        //GET INFO ID USING REQ ID.
        const url= `http://localhost:4000/info/?requestID=${this.state.reqID}&__v=0`;
        axios.get(url)
        .then((Response) => {
          //set requests[] as data recieved from api call
          this.setState({
            info: Response.data,
          })
        })
        .catch((error) => {
            console.log(error);
        }); 
    }



    processForm(){
        //update infoGivenBy,userMsg, and userMsgDate
           //then:
                //change status
                //add changeLog
    }

    render(){
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
                                <label>Query: </label>
                                <label>{}</label>
                            </div>

                            <div className ="formRow">
                                {/* <textarea className="infoInput" placeholder='Type your Message here..'
                                    value={msgChoice} onChange={(e)=>setMsg(e.target.value)} 
                                />*/}
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
}

export default ReplyInfo