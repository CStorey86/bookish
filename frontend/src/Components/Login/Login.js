import {React, useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import axios from '../../Api/axios';
import {isValidInput, isValidpasswordInput} from '../Utils';


function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // DATA VALIDATION: CHANGES INPUT TO STRING AND CHECKS INPUT SIZE BASED ON MODEL
    const validEmail = isValidInput(JSON.stringify(email), 3,32); 
    const validPassword =  isValidpasswordInput(JSON.stringify(password), 8);
    

    function handleSubmit (event){
        event.preventDefault();

        // INPUT VALIDATION - CHECKS ARE STRINGS AND CORRECT LENGTH BASED ON MODELS
            // const validForm = true;
            const validForm = (validEmail && validPassword)

        if(validForm === true){

            // SUBMIT TO SERVER FOR VERIFICATION
                const url=`/login`;
                axios.post(url,{
                    email: email,
                    password: password,
                })
                .then(res => {
                    console.log(res.data);

                    //IF DATA (A USER) IS RETURNED
                    if (res.status === 200){
                        const user = res.data;
                        // STORE THE USER TOKEN IN LOCAL STORAGE. 
                        localStorage.setItem('user', JSON.stringify(user));
                        window.location = '/Home';
                      }
                  })
            }
        else{
            alert("Invalid email or password");
        }          
      }

 

    
   

    return (
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
        );
    
}


   
export default Login;