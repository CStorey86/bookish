import React, {useState} from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from '../../Api/axios';

function changePasswordOn(){
    document.getElementById("changeThePassword").style.display = "block";     
}

function changePasswordOff(){
    document.getElementById("changeThePassword").style.display = "none";     
}

function hashPassword(pass){
    var password="" //hash and salt password
    return password;
}

function ChangePasswordBtn (props) {

    const [pass, setPass] = useState("");
    const [confPass, setConfPass] = useState("");
    const [errorMessage] = useState("");

    async function handleSubmit(event){
        if (this.state.pass === this.state.confPass)
        {
            const url=`users/${props.user._id}`; 
            const password = hashPassword(pass);

            axios.put(url,
                {
                    password: password
                })
                .then(
                    alert(`Your Password has now been updated`)
                )
                .catch((error) => {
                    console.log(error);
                });
        }
        else{
            alert(`Passwords do not match`)
            this.setState({
                ErrorMessage: "Passwords do not match"     
            })
        }
    }

    return(
        <>
            <button className="ActionBtn-wide" onClick={changePasswordOn}> Change Password</button>
            {/* on click, show overlay with delete confirmation (y/n buttons)*/}          

            <div id="changeThePassword">
                <div className="message">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={changePasswordOff}/> 
                    </div>
                    <h3>Change Password</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="formRow">
                            <div className="formItem2">
                                <label>New Password:</label>
                                <input type="password"
                                        value={pass} onChange={(e)=>setPass(e.target.value)}
                                />
                            </div>
                            <div className="formItem2">
                                <label>Confirm Password:</label>
                                <input type="password"
                                        value={confPass} onChange={(e)=>setConfPass(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="ErrorMessage">
                            {errorMessage}
                        </div>

                        <div className ="formRow">
                            <input type="submit" value="SUBMIT PASSWORD CHANGE" id="submitFormBtn" />
                        </div>
                    </form>

                </div>                                            
            </div>
   
          
        </>
    )
}

export default ChangePasswordBtn
