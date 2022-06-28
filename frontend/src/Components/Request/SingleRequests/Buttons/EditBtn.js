import React,{useState} from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../Api/axios';


function editOn(){
    document.getElementById("editRequest").style.display = "block";     
}

function editOff(){
    document.getElementById("editRequest").style.display = "none";     
}

const EditBtn =(props) => {

    // Request attributes
    const [formatChoice, setFormat] = useState(props.req.format);
    const [titleChoice, setTitle] = useState(props.req.title);
    const [authorChoice, setAuthor] = useState(props.req.author);
    const [publisherChoice, setPublisher] = useState(props.req.publisher);
    const [yearChoice, setYear] = useState(props.req.year);
    const [priceChoice, setPrice] = useState(props.req.price);

    function editRequest(){
        const url=`/requests/${props.req._id}`; 

        // update changes
        axios.put(url,
            {
                title: titleChoice,
                author: authorChoice,
                publisher: publisherChoice,
                year: yearChoice,
                price: priceChoice,
                format: formatChoice,
                userID: props.userID,
                status: "Awaiting Allocation",
                dateStatusChange: Date.now()
            })
            .then(
                alert(`Request ID: ${props.req._id}, has been updated`)
            )
            .catch((error) => {
                console.log(error);
            });
        console.log()

        //add changeLogEntry
        const log_url= `/changelogs`
            axios.post(log_url,
                {
                    requestID: props.req._id,
                    newStatus: "Updated",
                    dateOfChange: Date.now(),
                    userID: props.userID
                })

        editOff();                                  // Closes panel
        window.location.reload(false);              // Refresh page
    }


    return(
        <>
            <button className="ActionBtn" onClick={editOn}> Edit</button>
            {/* on click, show overlay with edit form inputs*/}          

            <div id="editRequest">
                <div className="message2">
                    <div className="topClose">
                        <FontAwesomeIcon icon={faWindowClose} onClick={editOff}/> 
                    </div>

                    <div className="editRequestForm">
                        <h3>Edit Request</h3>
                        <form>
                            <div className="formRow">
                                <div className="formItem">
                                    <label>Title:</label>
                                    <input type="text" placeholder={titleChoice}
                                        value={titleChoice} onChange={(e)=>setTitle(e.target.value)}/>
                                </div>
                                <div className="formItem">
                                    <label>Year:</label>
                                    <input type="text" id="Year" placeholder={yearChoice} 
                                        value={yearChoice} onChange={(e)=>setYear(e.target.value)}/>
                                </div>
                            </div>
                            <div className="formRow">
                                <div className="formItem">
                                    <label>Author:</label>
                                    <input type="text" placeholder={authorChoice} 
                                        value={authorChoice} onChange={(e)=>setAuthor(e.target.value)}/>
                                </div>
                                <div className="formItem">
                                    <label>Price:</label>
                                    <input type="text" id="Price" placeholder={priceChoice} 
                                        value={priceChoice} onChange={(e)=>setPrice(e.target.value)}/>
                                </div>
                            </div>
                            <div className="formRow">
                                <div className="formItem">
                                    <label>Publisher:</label>
                                    <input type="text" placeholder={publisherChoice} 
                                        value={publisherChoice} onChange={(e)=>setPublisher(e.target.value)}/>
                                </div>
                                <div className="formItem">
                                    <label>Book Type:</label>
                                    <select id="Format" name="format" placeholder="Select Format" 
                                        value={formatChoice} onChange={(e)=>setFormat(e.target.value)}>
                                            <option value={"default"}> {formatChoice} </option>
                                            <option value={"Book"}>Book</option>
                                            <option value={"Audio Book"}>Audio Book</option>
                                            <option value={"Braille"}>Braille</option>    
                                    </select>
                                </div>
                            </div>
                            <div className ="formRow">
                                <input type="submit" value="SUBMIT CHANGES" id="submitFormBtn" onClick={editRequest}/>
                            </div>
                        </form>
                    </div>
                </div>                                            
            </div>
        </>
    )
}

export default EditBtn

