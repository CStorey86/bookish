import React from 'react';
import axios from '../../../Api/axios';
import './allocations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import {formatDate, getUserName} from '../../Utils';

function allocateRequest(userID, reqID){

    const newStatus ="Allocated";
    const date = Date.now();

    const updateURL=`/requests/${reqID}`;
    const addNewURL=`/changelogs`;

    //Update request parameters
    axios.put(updateURL,
        {
            allocatedTo: userID,
            status: newStatus,
            dateStatusChange: date,
        })
        .then(
            alert(`Request ID: ${reqID}, has been allocated to you`),
            //log allocation & status change in changelogs
            axios.post(addNewURL,
                {
                    requestID: reqID,
                    newStatus: newStatus,
                    userID: userID,
                    dateChange: date,
                })
                .then(
                    window.location.reload(false) 
                )
                .catch((error) => {
                    console.log(error);
                })
        )
        .catch((error) => {
            console.log(error);
        });

}

function AwaitingAllocation (props) {

  // const userName = getUserName(props.user.firstName, props.user.lastName);

    return (
      <div className="AwaitingAllocationList">
        {/* Search bar ? */}

      {/* table listing awaiting allocation */}
        {props.available.map((item) => ( 
          <div className="allocationRow" key={item._id}>
            <div className="rowLeft">
              <div className="mainDetails">{item.title} - {item.author} - {item.year}</div>
              <div className="dateCreated">Date Created: {formatDate(item.dateStatusChange)}</div>
              {/* Get user name from userID */}
              <div className="UserName">User: {item.userID}</div> 
            </div>
            <div className="rowRight">
                <button className="allocateBtn" 
                    onClick={
                        () => allocateRequest(props.userID, item._id,)
                    }>
                    <FontAwesomeIcon icon={faPlus} size="2x"/>
                </button>
            </div>
          </div>
        ))}
      </div>
    );
}


export default AwaitingAllocation;