import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import logo from '../../BookishLogo.PNG';
import Footer from '../Footer/Footer';
import jwt_decode from "jwt-decode";
 

function Register () {

    const [isAuthenticated ,userHasAuthenticated ] = useState(false);
    const [firstName, setFirstName] =useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errMsg, setErrMsg] = useState("");

     
    async function handleSubmit(event) {
          event.preventDefault();
          try{
            axios.post(`http://localhost:4000/users`,
            {
              firstName:firstName,
              lastName:lastName,
              email:email.toLowerCase(),
              password:password
            },
            {
              validateStatus: false
            } 
          )
            .then(res => {
              if (res.status === 201) {
                const token = res.data;
                // Store the user token in localStorage
                localStorage.setItem('token', JSON.stringify(token));
                userHasAuthenticated(true);
                window.location = '/Home';
              }
              else {
                setErrMsg(res.data);
              }
              
            })
          } catch (err) {
            alert(err.message);
            setErrMsg(err.data);
          }
        }

    //Check Email and Password are not empty, and that the password and confirm password fields ar ethe same
    function validateForm() {
        return email.length > 0 && password.length > 0 && (password === confirmPassword);
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

                    <input  disabled={!validateForm()} type='submit' value='Register New User'/>   
                    
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