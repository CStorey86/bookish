import React,{Component} from 'react';
import './allocations.css';


function MyAllocation (props) {
  return (
    <div className="myAllocations">

      {/* table listing requests already allocated to me */}
        {props.myAllocations.map((item) => (
          <div className="allocationRow2" key={item._id}>
            <div className="mainDetails">{item.title} - {item.author} - {item.year}</div>  
          </div>
        ))}

    </div>
  
    );
}


export default MyAllocation;