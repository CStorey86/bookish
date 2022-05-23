import React,{Component} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser, faBookOpen, faPlus, faBookmark} from '@fortawesome/free-solid-svg-icons';
import logo from '../../BookishLogo.PNG';
import './navbar.css';


class NavBar extends Component {
  render(){
    return (
      <div className="NavBar">
          <Link to="/Home">
            <img id="Logo" src={logo} alt="Logo" />
          </Link>
          <Link to="/Login">
            <p id="Logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</p>
          </Link>


          {/* Standard User */}
            
            <Link to="/Profile">
              <p className="NavBarItem"><FontAwesomeIcon icon={faUser} /> Profile</p>
            </Link>
            <Link to="/Requests">
              <p className="NavBarItem"><FontAwesomeIcon icon={faBookOpen} /> My Requests</p>
            </Link>
            <Link to="/NewRequest">
              <p className="NavBarItem"><FontAwesomeIcon icon={faPlus} /> New Request</p>
            </Link>


          {/* Employee */}
                         
            
            {/* <Link to="/Profile">
              <p className="NavBarItem"><FontAwesomeIcon icon={faUser} /> Profile</p>
            </Link>
            <Link to="/Requests">
              <p className="NavBarItem"><FontAwesomeIcon icon={faBookOpen} /> My Requests</p>
            </Link>
            <Link to="/Allocations">
              <p className="NavBarItem"><FontAwesomeIcon icon={faBookmark} /> Allocations</p>
            </Link>
            <Link to="/Requests">
              <p className="NavBarItem"><FontAwesomeIcon icon={faBookOpen} /> All Requests</p>
            </Link> */}




          {/* Authoriser */}
                       
            
            {/* <Link to="/Profile">
              <p className="NavBarItem"><FontAwesomeIcon icon={faUser} /> Profile</p>
            </Link>
            <Link to="/Authorisations">
              <p className="NavBarItem"><FontAwesomeIcon icon={faBookmark} /> Authorisations</p>
            </Link>
            <Link to="/Requests">
              <p className="NavBarItem"><FontAwesomeIcon icon={faBookOpen} /> MyRequests</p>
            </Link>

            <Link to="/Users">
              <p className="NavBarItem"><FontAwesomeIcon icon={faUser} /> Users</p>
            </Link>

            <Link to="/Requests">
              <p className="NavBarItem"><FontAwesomeIcon icon={faBookOpen} /> All Requests</p>
            </Link> */}
          
          


      </div>
    );
  }
}

export default NavBar;


//<Link to="/about">About</Link>