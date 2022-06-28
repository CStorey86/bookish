import React from 'react';
import './authorisations.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import AuthorisationsDashboard from './AuthorisationsDashboard';

   // GET USER FROM STORED LOGIN TOKEN 
   const user = localStorage.getItem('user');
   let thisUser ={};
   if(user != null)
   {
     thisUser = JSON.parse(user);
   }


function Authorisations (props) {
    return (
      <div className="Authorisations">
            <AuthorisationsDashboard currentUser={thisUser}/>
      </div>
    );
}


export default Authorisations;