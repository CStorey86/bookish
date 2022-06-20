import React from 'react';
import axios from 'axios';
import './allocations.css';

import AwaitingAllocations from './AwaitingAllocation';
import MyAllocations from './MyAllocations';

class AllocationDashboard extends React.Component {

  constructor(props){
    super(props);
    this.state={
        available: [],
        currentUserID: props.user.id,
        myAllocations: [],
    }
  }

  componentDidMount(){
    const url= `http://localhost:4000/requests/?status=Awaiting Allocation`; 
    const ownUrl= `http://localhost:4000/requests/?allocatedTo=${this.state.currentUserID}`;

    //GET ALL REQUESTS AWAITING ALLOCATION
    axios.get(url)
      .then((Response) => {
        //set available[] as data recieved from api call
        this.setState({
             available: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });

    //GET REQUESTS ALLCCATED TO THIS USER ONLY
    axios.get(ownUrl)
      .then((Response) => {
        //set available[] as data recieved from api call
        this.setState({
             myAllocations: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });


  };

  render(){
    return (
      <div>
        <div className="LeftPanel">
            <h2>Awaiting Allocation</h2>
            <AwaitingAllocations available={this.state.available} userID={this.state.currentUserID}/>
        </div>

        <div className="RightPanel">
            <h2>My Allocations</h2>
            <MyAllocations myAllocations={this.state.myAllocations}/>
        </div>          
      </div>
    );
  }
}

export default AllocationDashboard;