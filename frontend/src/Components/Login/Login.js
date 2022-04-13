import React from 'react';
import {Link} from "react-router-dom";
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import logo from '../../BookishLogo.PNG';
import Footer from '../Footer/Footer';

function Login () {

    const handleSubmit =(event)=>{}

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

                    </div>
                    <div className="formRow">
                        <div className="formItem2">
                            <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /></label>
                            <input type='email' id="email" name="email" placeholder='Email'/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formItem2">
                            <label htmlFor='password'><FontAwesomeIcon icon={faLock} /></label>
                            <input type='password' id="password" name="password" placeholder='Password' autoComplete="off"  />
                        </div>
                    </div>           

                    <input type='submit' value='Login'/>   
                    
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