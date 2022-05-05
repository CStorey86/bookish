import React,{Component} from 'react';
import './newRequests.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import NewRequestForm from './newRequestForm';


class NewRequest extends Component {
  render(){
    return (
      <div className="NewRequest">
            <NavBar />
            <NewRequestForm/>
            <Footer />
      </div>
    );
  }
}

export default NewRequest;