import React,{Component} from 'react';
import './authorisations.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import AwaitingAuthorisation from './AwaitingAuthorisation';
import MyAuthorisations from './MyAuthorisations';

class Authorisations extends Component {
  render(){
    return (
      <div className="Authorisations">
            <NavBar />

            <AwaitingAuthorisation/>
            
            <MyAuthorisations />

            <Footer />
      </div>
    );
  }
}

export default Authorisations;