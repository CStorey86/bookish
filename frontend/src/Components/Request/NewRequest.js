import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import './requests.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


class NewRequest extends Component {
  render(){
    return (
      <div className="NewRequest">
            <NavBar />
            <div className="NewRequestForm">
                
            </div>
            <Footer />
      </div>
    );
  }
}

export default NewRequest;