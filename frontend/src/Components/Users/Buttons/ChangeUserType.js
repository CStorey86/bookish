import React from 'react';
import '../users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';


function ChangeUserTypeOn(){
    document.getElementById("ChangeUserType").style.display = "block";     
}

function ChangeUserTypeOff(){
    document.getElementById("ChangeUserType").style.display = "none";     
}


const ChangeUserType = (props) => { 


    return(
        <>
            <button className="ActionBtn-3widest" onClick={ChangeUserTypeOn}> Change User Type</button>
            {/* on click, show overlay with delete confirmation (y/n buttons)*/}          

            <div id="ChangeUserType">
                <div className="message">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={ChangeUserTypeOff}/> 
                    </div>
                    <h3>WORDS</h3>
                </div>                                            
            </div>
        </>
    )

}

export default ChangeUserType;

