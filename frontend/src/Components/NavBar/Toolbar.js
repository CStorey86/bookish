import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBookOpen, faUser, faBookmark, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import BrandLogo from './Logo';

function handleLogout(){
  // DELETE TOKEN FROM LOCAL STORAGE
  localStorage.setItem('user', '');
  // REDIRECT BACK TO LOGIN PAGE
  window.location = '/Login';
}

function Toolbar (props) {

  if(props.isAuth === true){
    // USER IS AUTHORISER
    return (
      <div className="NavBar">
        <Link to="/Login">
          <p id="Logout" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</p>
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
        <BrandLogo />
      </div>
    )
  }
  else if (props.isEmp === true){
    // USER IS EMPLOYEE
    return (      
      <div className="NavBar">
        <Link to="/Login">
          <p id="Logout" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</p>
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
        <BrandLogo />
      </div>
    )

  }
  else{
    // USER IS STANDARD USER
    return (
      <div className="NavBar">
        <Link to="/Login">
          <p id="Logout" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</p>
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
        <BrandLogo />
      </div>

    )
  }

}

export default Toolbar;
