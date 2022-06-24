
import {React, useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import logo from '../../BookishLogo.PNG';
import Footer from '../Footer/Footer';
import axios from 'axios';

function Login () {

    const { isAuthenticated ,setUserHasAuthenticated} = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    // Makes sure that an email and password has been entered before submitting
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
     
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
                    <div className="errMsg">
                        { errMsg &&
                        <h3 className="error"> { errMsg } </h3> }
                    </div>
                    <div className="formRow">
                        <div className="formItem2">
                            <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /></label>
                            <input type='email' id="email" name="email" placeholder='Email'
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formItem2">
                            <label htmlFor='password'><FontAwesomeIcon icon={faLock} /></label>
                            <input type='password' id="password" name="password" placeholder='Password' autoComplete="off"  
                                value={password}  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>           

                    <input type='submit' value='Login' disabled={!validateForm()}/>   
                    
                    </form>

                    <div className="formFooter">
                        <Link to="/Register">
                            <p>Not yet Registered? - Sign Up</p>
                        </Link>                                     
                    </div>
            </div>
            <Footer />
        </div>
        );
}


   
export default Login;