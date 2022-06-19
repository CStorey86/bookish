import React from 'react';
import axios from 'axios';
import './allocations.css';

function AwaitingAllocation (props) {
    return (
      <div className="AwaitingAllocationList">
        {/* Search bar ? */}

      {/* table listing awaiting allocation */}
        {props.available.map((item) => ( 
          <div className="allocationRow" key={item._id}>
              <div className="mainDetails">{item.title} - {item.author} - {item.year}</div>
              <div className="dateCreated">Date Created: {item.dateStatusChange}</div>
              <div className="UserName">User: {item.userID}</div>
          </div>
        ))}
      </div>
    );
}


export default AwaitingAllocation;