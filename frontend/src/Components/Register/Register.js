import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import logo from '../../Logos/BookishLogo.PNG';
import Footer from '../Footer/Footer';
import {isValidInput, isValidPassword} from '../Utils';
 

function validateForm(validFirstName, validLastName, validEmail, validPassword) {
  const validForm = false;     

  if(validFirstName === true && validLastName === true && validEmail === true && validPassword === true)
  {
    validForm = true;
  }
  return validForm;
}

function setErrorMessage(validFirstName, validLastName, validEmail, validPassword){


  if(validFirstName === false)
  {
    this.setState({
      ErrorMessage: "Please enter a valid first Name"
    })
  }
  else if(validLastName === false)
  {
    this.setState({
      ErrorMessage: "Please enter a valid last Name"
    })
  }
  else if(validEmail === false)
  {
    this.setState({
      ErrorMessage: "Please enter a valid Email"
    })
  }
  else if(validPassword === false)
  {
    this.setState({
      ErrorMessage: "Please enter a valid Password - Must be at least 8 characters"
    })
  }
}

function Register () {

    const [firstName, setFirstName] =useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validFirstName = isValidInput(firstName, 2,24);                 // VALID FIRST NAME
    const validLastName = isValidInput(lastName, 2,24);                   // VALID LAST NAME
    const validEmail = isValidInput(email, 3,64);                         // VALID EMAIL
    const validPassword = isValidPassword(password, confirmPassword, 8);  // VALID PASSWORD  

    const ErrorMessage = useState("");    
     
    async function handleSubmit(event) {
          event.preventDefault();
          const validForm = validateForm(validFirstName, validLastName,validEmail,validPassword);

          if( validForm === true){
            
              axios.post(`http://localhost:4000/users`,
              {
                firstName:firstName,
                lastName:lastName,
                email:email.toLowerCase(),
                password:password
              })
              .then(res => {
                  // get user details
                  window.location = '/Home';    // TAKE USER TO HOME PAGE
              })
              .catch((error) => {
                    console.log(error);
              }); 
          }
          else{
            setErrorMessage(validFirstName, validLastName,validEmail,validPassword);
          }
    }
    
    return (
        <div>
            <div className="NavBar">
                <Link to="/Home">
                    <img id="Logo" src={logo} alt="Logo" />
                </Link>
            </div>
                <div className='Register'>
                    <h1>Register</h1>
                    <form  onSubmit={handleSubmit}>
                      <div className="regFormRow">
                          <div className="ErrorMessage">
                            {ErrorMessage}
                          </div>
                      </div> 
                      <div className="regFormRow">
                          <div className="regFormItem">
                              <label htmlFor="firstName"><FontAwesomeIcon icon={faUser} /></label>
                              <input type='text' id="firstName" name="firstName"placeholder='First Name'
                                  value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                          </div>
                          <div className="regFormItem">
                              <label htmlFor="lastName"><FontAwesomeIcon icon={faUser} /></label>
                              <input type='text'  id="lastName" name="lastName" placeholder='Last Name' 
                                  value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                          </div>
                      </div>
                      <div className="regFormRow">
                          <div className="regFormItem2">
                              <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /></label>
                              <input type='email' id="email" name="email" placeholder='Email'  
                                  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                          </div>
                      </div>
                      <div className="regFormRow">
                          <div className="regFormItem">
                              <label htmlFor='password'><FontAwesomeIcon icon={faLock} /></label>
                              <input type='password' id="password" name="password" placeholder='Password' autoComplete="off"  
                                      value={password} onChange={(e)=>setPassword(e.target.value)}/>

                          </div>
                          <div className="regFormItem">
                              <label htmlFor='password'><FontAwesomeIcon icon={faLock} /></label>
                              <input type='password' id="confirmPassword" name="confirmPassword" placeholder='Confirm Password' autoComplete="off" 
                                  value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                          </div>
                      </div>      
          

                      <input  type='submit' value='Register New User'/>   
                    
                    </form>

                    <div className="formFooter">
                        <Link to="/Login">
                            <p>Already Registered? - Login</p>
                        </Link>

                    </div>
                </div>
                <Footer />
            </div>
        );
}
export default Register;