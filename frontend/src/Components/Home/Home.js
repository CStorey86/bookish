import React,{Component} from 'react';
import './home.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import MainContent from './MainContent';

class Home extends Component {
  render(){
    return (
      <div className="Home">
            <NavBar/>
            <MainContent/>
            <Footer />

      </div>
    );
  }
}

export default Home;
