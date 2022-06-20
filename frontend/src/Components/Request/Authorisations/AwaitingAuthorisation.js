import React from 'react';
import axios from 'axios';
import './authorisations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

function addAuthorisation(userID, reqID){

  const newStatus ="Authorisor Assigned";
  const date = Date.now();

  const updateURL=`http://localhost:4000/requests/${reqID}`;
  const addNewURL=`http://localhost:4000/changelogs`;

   //Update request parameters
   axios.put(updateURL,
    {
        authorisedBy: userID,
        status: newStatus,
        dateStatusChange: date,
    })
    .then(
        alert(`Request ID: ${reqID}, has been assigned to you for Authorisation`),
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

function AwaitingAuthorisation (props) {

    return (
      <div className="awaitingAuthorisationsList">
      {/* Search bar ? */}

      {/* table listing awaiting Authorisation*/}
      {props.available.map((item) => ( 

        <div className="authorisationsRow" key={item._id}>
            <div className="rowLeft">
              <div className="mainDetails">{item.title} - {item.author} - {item.year}</div>
              <div className="dateCreated">Date Created: {item.dateStatusChange}</div>
              <div className="UserName">User: {item.userID}</div>
            </div>
            <div className="rowRight">
                <button className="assignBtn" 
                    onClick={
                        () => addAuthorisation(props.userID, item._id,)
                    }>
                    <FontAwesomeIcon icon={faPlus} size="2x"/>
                </button>
            </div>
          </div>
        ))}




      </div>
    );
}


export default AwaitingAuthorisation;