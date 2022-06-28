import React from 'react';
import './navbar.css';
import Toolbar from './Toolbar';
import BrandLogo from './Logo';

function NavBar () {
  
  // GET USER FROM STORED LOGIN TOKEN
  let thisUser = JSON.parse(localStorage.getItem('user'));

  // IF USER EXISTS - SHOW FULL NAVBAR WITH LOGOUT BUTTON - ELSE SHOW BRAND LOGO ONLY
  if (thisUser._id === undefined){
    return(
      <BrandLogo />
    )
  }
  else{
    return(
      <Toolbar isAuth={thisUser.isAdmin} isEmp={thisUser.isEmployee} userID={thisUser._id}/>
    )
  }
  
}

export default NavBar;
