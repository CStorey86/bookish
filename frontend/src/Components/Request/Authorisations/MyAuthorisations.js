import React from 'react';
import './authorisations.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";



function removeAllocation(userID, reqID){

  const newStatus ="Awaiting authorisation";
  const date = Date.now();

  const updateURL=`http://localhost:4000/requests/${reqID}`;
  const addNewURL=`http://localhost:4000/changelogs`;

  //change details in request db
  axios.put(updateURL,
      {
          authorisedBy: "",
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
          
          alert(`Request ID: ${reqID}, has been removed from your assigned requests`),
      )
      .catch((error) => {
          console.log(error);
      });

}

function MyAuthorisations (props) {

    return (
      <div className="myAuthorisations">

          {/* table listing requests already assigned to this user for authorisation */}
          {props.myAuthorisations.map((item) => (
            <div className="authorisationsRow2" key={item._id}>

            {/* LINK TAKING USER BACK TO MY REQUESTS WHEN CLICKED */}
            <Link to="/Requests">       
              <div className="rowLeft2">
                <div className="mainDetails">{item.title} - {item.author} - {item.year}</div>
              </div>
            </Link>

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

export default MyAuthorisations;