import React,{Component, useState} from 'react';
import '../../requests.css';

import axios from '../../../../Api/axios';
import ReplyReqForm from './ReplyReqForm';



class ReplyInfo extends Component {

    constructor(props){
        super(props);
        this.state={
            reqID: props.reqID,
            userID: props.userID,
            info: {},
        }
    }
    
    componentDidMount(){
        //GET INFO OBJECT USING REQ ID.
        const url= `/info/?requestID=${this.state.reqID}`;
        axios.get(url)
        .then((Response) => {
          //set info {} as the first item of data recieved from api call
          this.setState({
            info: Response.data[0]
          })
        })
        .catch((error) => {
            console.log(error);
        }); 
    }

    render(){
        return(
            <ReplyReqForm reqID={this.state.reqID} userID={this.state.userID} 
                infoID={this.state.info._id} infoEmp={this.state.info.infoReqBy} infoMsg={this.state.info.empMsg}
                
            />
        )
    }
}

export default ReplyInfo