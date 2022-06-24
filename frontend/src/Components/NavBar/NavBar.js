import React,{Component} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser, faBookOpen, faPlus, faBookmark} from '@fortawesome/free-solid-svg-icons';
import logo from '../../BookishLogo.PNG';
import './navbar.css';
import {useAuth0} from '@auth0/auth0-react';

function NavBar (props) {
  
  if(props.isAuth === true){
    // USER IS AUTHORISER
    return (
      <div className="NavBar">
        <Link to="/Home">
          <img id="Logo" src={logo} alt="Logo" />
        </Link>
        <Link to="/Login">
          <p id="Logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</p>
        </Link>

        <Link to="/Profile">
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
        <Link to="/AllRequests">
          <p className="NavBarItem"><FontAwesomeIcon icon={faBookOpen} /> All Requests</p>
        </Link> 
      </div>
    )
  }
  else if (props.isEmp === true){
    // USER IS EMPLOYEE
    return (      
      <div className="NavBar">
        <Link to="/Home">
          <img id="Logo" src={logo} alt="Logo" />
        </Link>
        <Link to="/Login">
          <p id="Logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</p>
        </Link>

        <Link to="/Profile">
          <p className="NavBarItem"><FontAwesomeIcon icon={faUser} /> Profile</p>
        </Link>
        <Link to="/Requests">
          <p className="NavBarItem"><FontAwesomeIcon icon={faBookOpen} /> My Requests</p>
        </Link>
        <Link to="/Allocations">
          <p className="NavBarItem"><FontAwesomeIcon icon={faBookmark} /> Allocations</p>
        </Link>
        <Link to="/AllRequests">
          <p className="NavBarItem"><FontAwesomeIcon icon={faBookOpen} /> All Requests</p>
        </Link> 
      </div>
    )

  }
  else{
    // USER IS STANDARD USER
    return (
      <div className="NavBar">
        <Link to="/Home">
          <img id="Logo" src={logo} alt="Logo" />
        </Link>
        <Link to="/Login">
          <p id="Logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</p>
        </Link>
        <Link to="/Profile">
          <p className="NavBarItem"><FontAwesomeIcon icon={faUser} /> Profile</p>
        </Link>
        <Link to="/Requests">
          <p className="NavBarItem"><FontAwesomeIcon icon={faBookOpen} /> My Requests</p>
        </Link>
        <Link to="/NewRequest">
          <p className="NavBarItem"><FontAwesomeIcon icon={faPlus} /> New Request</p>
        </Link>
    </div>
    )
  }
}

export default NavBar;
