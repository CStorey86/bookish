import React,{Component} from 'react';
import './users.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import UsersDashboard from './UsersDashboard';

function Users () {
    return (
      <div className="User">
            <NavBar/>
            <UsersDashboard />
            <Footer />
      </div>
    );
  }


export default Users;
