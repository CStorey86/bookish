import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser, faBookOpen, faPlus} from '@fortawesome/free-solid-svg-icons';
import logo from '../../BookishLogo.PNG';
import './navbar.css';


class NavBar extends Component {
  render(){
    return (
      <div className="NavBar">
          <img id="Logo" src={logo} alt="Logo" />
          <p id="Logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</p>
          <p className="NavBarItem"><FontAwesomeIcon icon={faUser} /> Profile</p>
          <p className="NavBarItem"><FontAwesomeIcon icon={faBookOpen} /> My Requests</p>
          <p className="NavBarItem"><FontAwesomeIcon icon={faPlus} /> New Request</p>
      </div>
    );
  }
}

export default NavBar;