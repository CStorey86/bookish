import React,{Component} from 'react';
import './home.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Dashboard from './Dashboard';


class Home extends Component {
  render(){
    return (
      <div className="Home">
            <NavBar/>

            {/* Dashboard = landing page: shows summary of requests, and notifications */}
            <Dashboard />
            {/*  */}

            <Footer />
      </div>
    );
  }
}

export default Home;
