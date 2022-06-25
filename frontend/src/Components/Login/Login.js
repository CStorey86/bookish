
import {React, useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import logo from '../../Logos/BookishLogo.PNG';
import googleLogo from '../../Logos/GoogleLogo.PNG'
import microsoftLogo from '../../Logos/MicrosoftLogo.PNG'
import Footer from '../Footer/Footer';
import axios from 'axios';


function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


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

            <div className="altLogin">
                <div class="altLoginRow">
                    {/* LINK TO AUTH0 */}
                        <img className="altLogLogo" src={googleLogo} alt="Google Logo" />
                        <h3>Login with Google</h3>
                </div>
                <div class="altLoginRow">
                    {/* LINK TO AUTH0 */}
                        <img className="altLogLogo" src={microsoftLogo} alt="Google Logo" />
                        <h3>Login with Microsoft</h3>
                </div>
                
            </div>

            <Footer />
        </div>
        );
}


   
export default Login;