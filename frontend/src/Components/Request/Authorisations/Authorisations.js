import React,{Component} from 'react';
import './authorisations.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import AuthorisationsDashboard from './AuthorisationsDashboard';

class Authorisations extends Component {
  render(props){
    return (
      <div className="Authorisations">
            <NavBar isAuth={props.user.isAdmin} isEmp={props.user.isEmployee}/>

            <AuthorisationsDashboard />

            <Footer />
      </div>
    );
  }
}

export default Authorisations;