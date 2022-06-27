import React from 'react';
import './users.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import UsersDashboard from './UsersDashboard';

function Users (props) {
    return (
      <div className="User">
            <NavBar isAuth={props.user.isAdmin} isEmp={props.user.isEmployee}/>
            <UsersDashboard />
            <Footer />
      </div>
    );
  }


export default Users;
