import React, {useState} from 'react';
import '../users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from '../../../Api/axios';
import {getUserName} from '../../Utils';


function AuthLimitOn(){
    document.getElementById("AuthLimit").style.display = "block";     
}

function AuthLimitOff(){
    document.getElementById("AuthLimit").style.display = "none";     
}


const AuthLimit = (props) => { 

    const [AuthLimitChoice, setAuthLimitChoice] = useState(props.user.authLimit);
    const userID = props.user._id;
    const userName = getUserName(props.user);

    function changeAuthLimit(){
        const url=`/user/${userID}`;

        axios.put(url,
            {
                authLimit: AuthLimitChoice
            })
            .then(res => {
                alert("success");
                // alert(`Authorisation Limit increased to ${AuthLimitChoice} for ${userName}`)
            }
            )
            .catch((error) => {
                console.log(error);
            });

    }

    if(props.user.isEmployee === true){
        return(
            <>
                <button className="ActionBtn-3widest" onClick={AuthLimitOn}> Set Authorisation Limit</button>
                {/* on click, show overlay with delete confirmation (y/n buttons)*/}          
    
                <div id="AuthLimit">
                    <div className="message">
                        <div className="topClose">
                            <FontAwesomeIcon icon={faWindowClose} onClick={AuthLimitOff}/> 
                        </div>
                        <h3>CHANGE EMPLOYEE AUTHORISATION LIMIT</h3>
                        <form id="changeUserAuth"  onSubmit={changeAuthLimit}>
                            <div className="authFormSection">
                                <label>Limit (£):</label>
                                <input type="number" placeholder= {props.user.authLimit}
                                    value={AuthLimitChoice} onChange={(e)=>setAuthLimitChoice(e.target.value)}/>
                            </div>
                            <div className="authFormSection">
                                <button className="AuthBtn" >Change Authorisation Limit</button>
                            </div>
                        </form>
    
                    </div>                                            
                </div>
            </>
        )
    }
    else{
        return(<></>)
    }
}

export default AuthLimit;

