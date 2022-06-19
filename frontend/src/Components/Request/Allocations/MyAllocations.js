import React,{Component} from 'react';
import axios from 'axios';
import './allocations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus} from '@fortawesome/free-solid-svg-icons';

function removeAllocation(userID, reqID){

  const newStatus ="Awaiting Allocation";
  const date = Date.now();

  const updateURL=`http://localhost:4000/requests/${reqID}`;
  const addNewURL=`http://localhost:4000/changelogs`;

  //change details in request db
  axios.put(updateURL,
      {
          allocatedTo: "",
          status: newStatus,
          dateStatusChange: date,
      })
      .then(
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
              }),
          
          alert(`Request ID: ${reqID}, has been removed from your requests - ${newStatus}`),
      )
      .catch((error) => {
          console.log(error);
      });

}

function MyAllocation (props) {
  return (
    <div className="myAllocations">

      {/* table listing requests already allocated to me */}
        {props.myAllocations.map((item) => (
          <div className="allocationRow2" key={item._id}>
            <div className="rowLeft2">
              <div className="mainDetails">{item.title} - {item.author} - {item.year}</div>
            </div>
            <div className="rowRight2">
                <button className="removeAllocateBtn" 
                     onClick={
                         () => removeAllocation(props.userID, item._id,)}>
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
            </div>
          </div>
        ))}

    </div>
  
    );
}


export default MyAllocation;