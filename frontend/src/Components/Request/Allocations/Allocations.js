import React,{Component} from 'react';
import './allocations.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import AwaitingAllocation from './AwaitingAllocation';
import MyAllocations from './MyAllocations';


class Allocations extends Component {
  render(){
    return (
      <div className="Allocations">
            <NavBar />

            <AwaitingAllocation />
            
            <MyAllocations />

            <Footer />
      </div>
    );
  }
}

export default Allocations;