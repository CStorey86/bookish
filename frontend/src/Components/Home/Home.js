import React from 'react';
import './home.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Dashboard from './Dashboard';

const Home = (props) =>{

    return (
      <div className="Home">
            <NavBar isAuth={props.user.isAdmin} isEmp={props.user.isEmployee}/>

            <Dashboard currentUser={props.user}/>
            {/* Dashboard = landing page: shows summary of requests, and notifications */}
            
            <Footer />
      </div>
    );
 }


export default Home;
