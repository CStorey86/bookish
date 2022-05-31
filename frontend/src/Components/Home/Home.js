import React,{Component} from 'react';
import './home.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Dashboard from './Dashboard';

let user ={
  id:"62860fe823c9c0ba976b9ba7",
  firstName: "Claire",
  lastName: "Storey",
  isAdmin: false,
  isEmployee: false,
}


class Home extends Component {
  render(){
    return (
      <div className="Home">
            <NavBar/>

            <Dashboard currentUser={user}/>
            {/* Dashboard = landing page: shows summary of requests, and notifications */}
            
            <Footer />
      </div>
    );
  }
}

export default Home;
