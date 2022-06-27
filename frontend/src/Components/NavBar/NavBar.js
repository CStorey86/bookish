import React from 'react';
import './navbar.css';
import Toolbar from './Toolbar';
import BrandLogo from './Logo';

function NavBar () {
  
  /////////////////////////////// TO BE REPLACED ////////////////////////////////////

  let thisUser = undefined
  // {
  //   // id: "62af7c4daea678e8b9f650d3",
  //   // firstName: "Claire",
  //   // lastName: "Storey",
  //   // email: "claire@email.com",
  //   // createdDate: "2022-05-05T13:10:00.000+00:00",
  //   // isAdmin: false,
  //   // isEmployee: false,
  // };     

  ///////////////////////////////////////////////////////////////////////////////////
  
    return (
      <div className="NavBar">
          {/* IF USER EXISTS - SHOW FULL NAVBAR WITH LOGOUT BUTTON - ELSE SHOW LOGIN BUTTON*/}
          {thisUser ? (
            <Toolbar isAuth={thisUser.isAuth} isEmp={thisUser.isEmp}/>
          ):(
            <BrandLogo />
          )}

      </div>
    )
  
}

export default NavBar;
