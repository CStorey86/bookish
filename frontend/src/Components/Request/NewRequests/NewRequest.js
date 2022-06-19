import React,{Component} from 'react';
import './newRequests.css';

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import NewRequestForm from './newRequestForm';


function NewRequest (props){
    return (
      <div className="NewRequest">
            <NavBar isAuth={props.user.isAuth} isEmp={props.user.isEmp} />
            <NewRequestForm currentUser={props.user}/>
            <Footer />
      </div>
    );
}


export default NewRequest;