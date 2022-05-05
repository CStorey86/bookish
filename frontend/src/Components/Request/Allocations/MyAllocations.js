import React,{Component} from 'react';
import './allocations.css';


class MyAllocation extends Component {
  render(){
    return (
      <div className="myAllocations">
          <h2>My Allocations</h2>

          {/* table listing chosen allocation */}
          <div className="allocationRow">
            TEST - chosen 1
        </div>
        <div className="allocationRow">
            TEST - chosen 2
        </div>

      </div>
    );
  }
}

export default MyAllocation;