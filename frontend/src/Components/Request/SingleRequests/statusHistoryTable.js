import React, { Component } from 'react';
import axios from 'axios';

function getReqID(props){
    const reqID = props.reqID;
    return reqID;
}

class statusHistoryTable extends Component{

    constructor(props){
        super(props);
        this.state={
            statusHistory: []
        }
    }

    componentDidMount(){
        const url=`http://localhost:4000/changelogs/?requestID=${getReqID}`; 

        axios.get(url)
        .then((Response) => {
          this.setState({
            statusHistory: Response.data     
          })
        })
        .catch((error) => {
          console.log(error);
        });
    };

    render(){
    
        return (

            <div className="statusHistoryList">
                <h3>Status History</h3>
                <div className="RequestList" >
                    <table id="changeLogTable">
                            <thead>
                                <tr>
                                    <td>Date</td>
                                    <td>Status Change</td>
                                    <td>User</td>
                                </tr>
                            </thead>
                        {statusHistory.map((item) = (
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
            
        );
        
        }
}

export default statusHistoryTable;