import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import logo from '../../Logos/BookishLogo.PNG';
import Footer from '../Footer/Footer';
import {isValidInput, isValidPassword} from '../Utils';

function validateForm(firstName, lastName, email, password, confirmPassword){

  const validFName = false;
  const validEmail = false;
  const validLName = false;
  const validPassword = false
  const validForm = false;

  // CHECK FIRSTNAME
      //CHECK IS STRING && BETWEEN MIN AND MAX
      if(isValidInput(firstName, 2, 24)){
        validFName = true;
      }
      else{
        this.setState({
          ErrorMessage: "Invalid First Name"
        })
      }

  // CHECK LASTNAME
    if(isValidInput(lastName, 2, 24)){
      validLName = true;
    }
    else{
      this.setState({
        ErrorMessage: "Invalid Last Name"
      })
    }

  // CHECK EMAIL
    if(isValidInput(email, 3, 32)){
      validEmail = true;
    }
    else{
      this.setState({
        ErrorMessage: "Invalid Email"
      })
    }
  // CHECK PASSWORD 
    if(isValidPassword(password, confirmPassword, 8,)){
      validPassword = true;
    }
    else{
      this.setState({
        ErrorMessage: "Invalid Password - Passwords must match and be at least 8 characters long"
      })
    }

    if(validFName === true && validLName ===  true && validEmail === true && validPassword ==- true){
      validForm = true;
    }

  return validForm
}

function Register () {

    const [firstName, setFirstName] =useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [ErrorMessage] = useState("");
   
     
    async function handleSubmit(event) {
          event.preventDefault();

          const validForm = validateForm(firstName, lastName, email, password, confirmPassword);
          // const validForm = true;

          if( validForm === true){
            
              axios.post(`http://localhost:4000/users`,
              {
                firstName:firstName,
                lastName:lastName,
                email:email.toLowerCase(),
                password:password
              })
              .then(res => {
                  alert("You have registered successfully")
                  window.location = '/Login';    // TAKE USER TO LOGIN PAGE
              })
              .catch((error) => {
                    console.log(error);
              }); 
          }
          else{
            // setErrorMessage(validFirstName, validLastName,validEmail,validPassword);
            alert(this.state.ErrorMessage)
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