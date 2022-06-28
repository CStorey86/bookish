import React from 'react';
import {Link} from "react-router-dom";
import './navbar.css';
import logo from '../../Logos/BookishLogo.PNG';

function BrandLogo () {
    
    return (
      <div>
          <Link to="/Home">
            <img id="Logo" src={logo} alt="Logo" />
          </Link>
      </div>
    )
  
}

export default BrandLogo;
