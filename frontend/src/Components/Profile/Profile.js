import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import './profile.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


class RequestList extends Component {
  render(){
    return (
      <div className="Profile">
            <NavBar />
            
            <Footer />
      </div>
    );
  }
}

export default RequestList;