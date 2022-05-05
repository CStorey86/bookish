
import {React, useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import logo from '../../BookishLogo.PNG';
import Footer from '../Footer/Footer';
import axios from 'axios';
import jwt_decode from "jwt-decode";

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
        try{
          axios.post(`http://localhost4000:/api/login`,
          {
            email:email,
            password:password
          },
          {
            validateStatus: false
          } 
          )
          .then(res => {
            console.log(res.data);
            if (res.status === 200){
              const token = res.data;
              // Store the token in localstorage. 
              localStorage.setItem('token', JSON.stringify(token));
              window.location = '/home';
            }
            else{
              setErrMsg(res.data);
            }
          })
        } catch (err) {
          alert(err.message);
          setErrMsg(err.data);
        }
    }
    
    useEffect(() => {
        onLoad();
        async function onLoad() {
            try {
                const token = JSON.parse(localStorage.getItem('token')).token;
                const date = new Date();
                const decodedToken = jwt_decode(token);
                
                if ((date.getTime()/1000) > decodedToken.exp ){
                  await setUserHasAuthenticated(false);
                  localStorage.removeItem('token');
                  if (window.location.pathname !== '/'){
                    window.location = '/login';
                  }
                  
                }else {
                  window.location = "/home";
                }
              }
              catch(e) {
                console.log(e);
              }
        }
      }, [isAuthenticated]);


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