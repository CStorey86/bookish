import {React, useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import logo from '../../Logos/BookishLogo.PNG';
// import googleLogo from '../../Logos/GoogleLogo.PNG'
// import microsoftLogo from '../../Logos/MicrosoftLogo.PNG'
import Footer from '../Footer/Footer';
import axios from 'axios';
import {isValidInput} from '../Utils';
// Auth0 import here

function validateForm(validEmail, validPassword){
    const validForm = false;     
    if(validEmail === true && validPassword === true)
    {
      validForm = true;
    }
    return validForm;
}

function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const validEmail = isValidInput(email, 3,32);            //min and max from user Model
    // const validPassword = isValidInput(password, 8,100);     //min from user Model

    const handleSubmit =(event)=>{
        event.preventDefault();

        // const validForm = validateForm(validEmail,validPassword);
        const validForm = true;

        if(validForm === true){

            // SUBMIT TO SERVER FOR VERIFICATION
                const url=`https://localhost:3000/login`;
                axios.post(url,{
                    email: email,
                    password: password,
                },
                {
                    validateStatus: false
                })           

        }
        else{
            alert("Invalid email or password");
        }

          
      }

 

    
   

    return (
        <div>
            <div className="NavBar">
                <Link to="/Home">
                    <img id="Logo" src={logo} alt="Logo" />
                </Link>
            </div>

            <div className='Login'>
                    <h1>User Login </h1>
                    <form  onSubmit={handleSubmit}>
                    <div className="loginFormRow">
                        <div className="formItem2">
                            <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /></label>
                            <input type='email' id="email" name="email" placeholder='Email'
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="loginFormRow">
                        <div className="formItem2">
                            <label htmlFor='password'><FontAwesomeIcon icon={faLock} /></label>
                            <input type='password' id="password" name="password" placeholder='Password' autoComplete="off"  
                                value={password}  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>   
                    <div className="loginFormRow">
                        <input type='submit' value='Login' /> 
                    </div>       
                    </form>

                    <div className="formFooter">
                        <Link to="/Register">
                            <p>Not yet Registered? - Sign Up</p>
                        </Link>                                     
                    </div>
            </div>

            {/* <div className="altLogin">
                <div className="altLoginRow">
                    {/* LINK TO AUTH0 
                        <img className="altLogLogo" src={googleLogo} alt="Google Logo" />
                        <h3>Login with Google</h3>
                </div>
                <div className="altLoginRow">
                    {/* LINK TO AUTH0 
                        <img className="altLogLogo" src={microsoftLogo} alt="Google Logo" />
                        <h3>Login with Microsoft</h3>
                </div>
            </div> */}

            <Footer />
        </div>
        );
    
}


   
export default Login;