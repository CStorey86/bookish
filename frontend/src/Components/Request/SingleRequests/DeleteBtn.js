import React from 'react';
import '../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function deleteOn(){
    document.getElementById("deleteRequest").style.display = "block";     
}

function deleteOff(){
    document.getElementById("deleteRequest").style.display = "none";     
}



const DeleteBtn =(props) => {

    function deleteRequest(){
        const url=`http://localhost:4000/requests/${props.reqID}`; 

        axios.delete(url)
            .then(

                alert(`Request ID: ${props.reqID}, has been deleted`)
            )
            .catch((error) => {
                console.log(error);
            });
        
        console.log()

        deleteOff();                                // Closes panel
        window.location.reload(false);              // Refresh page
    }


    return(
        <>
            <button className="ActionBtn" onClick={deleteOn}> Delete</button>
            {/* on click, show overlay with delete confirmation (y/n buttons)*/}          

            <div id="deleteRequest">
                <div className="message">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={deleteOff}/> 
                    </div>
                    <h3>Are you sure you wish to delete this Request?</h3>
                    <button className="ActionBtn"  onClick={deleteRequest}>Yes</button>
                        
                    <button className="ActionBtn" onClick={deleteOff}>No</button>
                </div>                                            
            </div>
        </>
    )
}

export default DeleteBtn
