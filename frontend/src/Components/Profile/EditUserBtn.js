import React,{useState} from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from '../../Api/axios';


function editUserOn(){
    document.getElementById("editUser").style.display = "block";     
}

function editUserOff(){
    document.getElementById("editUser").style.display = "none";     
}

const EditUserBtn =(props) => {

    // User attributes
    const [firstNameChoice, setFirstName] = useState(props.user.firstName);
    const [lastNameChoice, setLastName] = useState(props.user.lastName);
    const [emailChoice, setEmail] = useState(props.user.email);

    function editUser(event){
        const url=`user/${props.user._id}`; 

        // update changes
        axios.put(url,
            {
                firstName: firstNameChoice,
                lastName: lastNameChoice,
                email: emailChoice,
            })
            .then(
                alert(`User ID: ${props.user._id}, has been updated`)
            )
            .catch((error) => {
                console.log(error);
            });
        console.log()

        editUserOff();                              // Closes panel
        window.location.reload(false);              // Refresh page
    }


    return(
        <>
            <button className="ActionBtn-wide" onClick={editUserOn}> Edit User Profile</button>
            {/* on click, show overlay with edit form inputs*/}          

            <div id="editUser">
                <div className="message2">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={editUserOff}/> 
                    </div>

                    <div className="editRequestForm">
                        <h3>Edit My Details</h3>
                        <form onSubmit={editUser}>
                            <div className="formRow">
                                <div className="formItem">
                                    <label>First Name:</label>
                                    <input type="text" placeholder={firstNameChoice}
                                            value={firstNameChoice} onChange={(e)=>setFirstName(e.target.value)}/>
                                </div>
                                <div className="formItem">
                                    <label>Last Name:</label>
                                    <input type="text" placeholder={lastNameChoice}
                                            value={lastNameChoice} onChange={(e)=>setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="formRow">
                                <div className="formItem">
                                    <label>Email:</label>
                                    <input type="text" placeholder={emailChoice}
                                            value={emailChoice} onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className ="formRow">
                                <input type="submit" value="SUBMIT CHANGES" id="submitFormBtn" />
                            </div>
                        </form>
                    </div>
                </div>                                            
            </div>
        </>
    )
}

export default EditUserBtn

