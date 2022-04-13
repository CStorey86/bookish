import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import logo from '../../BookishLogo.PNG';
import Footer from '../Footer/Footer';
 

function Register () {
    
    const [thefirstName, setFirstName] =useState("");
    const [thelastName, setLastName] = useState("");
    const [theemail, setEmail] = useState("");
    const [thepassword, setPassword] = useState("");

    const handleSubmit =(event)=>{
        event.preventDefault();
        
        axios.post('http://localhost:4000/users',{

            firstName: {thefirstName},
            lastName: {thelastName},
            email: {theemail},
            password: {thepassword}
        
        })
        
        .then((response) =>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    return (
        <div>
            <div className="NavBar">
                <img id="Logo" src={logo} alt="Logo" /> 
            </div>
                <div className='Register'>
                    <h1>Register</h1>
                    <form  onSubmit={handleSubmit}>
                    <div className="errMsg">

                    </div>
                    <div className="formRow">
                        <div className="formItem">
                            <label htmlFor="firstName"><FontAwesomeIcon icon={faUser} /></label>
                            <input type='text' id="firstName" name="firstName"placeholder='First Name'
                                value={thefirstName} onChange={(e)=>setFirstName(e.target.value)}/>
                        </div>
                        <div className="formItem">
                            <label htmlFor="lastName"><FontAwesomeIcon icon={faUser} /></label>
                            <input type='text'  id="lastName" name="lastName" placeholder='Last Name' 
                                value={thelastName} onChange={(e)=>setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formItem2">
                            <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /></label>
                            <input type='email' id="email" name="email" placeholder='Email'  
                                value={theemail} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formItem">
                            <label htmlFor='password'><FontAwesomeIcon icon={faLock} /></label>
                            <input type='password' id="password" name="password" placeholder='Password' autoComplete="off"  
                                    value={thepassword} onChange={(e)=>setPassword(e.target.value)}/>

                        </div>
                        <div className="formItem">
                            <label htmlFor='password'><FontAwesomeIcon icon={faLock} /></label>
                            <input type='password' id="confirmPassword" name="confirmPassword" 
                                    placeholder='Confirm Password' autoComplete="off" />
                        </div>
                    </div>           

                    <input type='submit' value='Register New User'/>   
                    
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