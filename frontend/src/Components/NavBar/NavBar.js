import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import logo from '../../Logos/BookishLogo.PNG';
import './navbar.css';

import Toolbar from './Toolbar';

function NavBar () {
  
 /////////////////////////////// TO BE REPLACED ////////////////////////////////////

 let thisUser = {
  id: "62af7c4daea678e8b9f650d3",
  firstName: "Claire",
  lastName: "Storey",
  email: "claire@email.com",
  createdDate: "2022-05-05T13:10:00.000+00:00",
  isAdmin: false,
  isEmployee: false,
};     


///////////////////////////////////////////////////////////////////////////////////
    return (
      <div className="NavBar">
          <Link to="/Home">
            <img id="Logo" src={logo} alt="Logo" />
          </Link>

          {/* IF USER EXISTS - SHOW FULL NAVBAR WITH LOGOUT BUTTON - ELSE SHOW LOGIN BUTTON*/}
          {thisUser ? (
            <Link to="/Login">
                <p id="Logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</p>
            </Link>,
            <Toolbar 
              // isAuth={isAuth} isEmp={isEmp}
            />
          ):(
            <></>
          )}

      </div>
    )
  
}

export default NavBar;
