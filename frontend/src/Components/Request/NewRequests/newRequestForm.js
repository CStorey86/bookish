import React,{useState} from 'react';
import './newRequests.css';
import axios from 'axios';

// If currency option added, extra function will be needed for currency conversion.

//////////////////////////////////     DATA VALIDATION   ////////////////////////////////////////
function dataValidation(title, author, publisher, year, price){
  const validEntry = false;

    // TITLE: check not empty, and is string
      const validTitle = isValidTitleOrAuthor(title);
    // AUTHOR: check not empty, and is string
      const validAuthor = isValidTitleOrAuthor(author);
    // PUBLISHER: check is string
      const validPub = isValidPublisher(publisher);
    // YEAR: check is whole number between 1900 and current year
      const validYr = isValidYear(year);
    // PRICE: check not empty, and is number with 2 decimal places
      const validPrice = isValidPrice(price);

    

  return {validEntry};
}

function isValidTitleOrAuthor(input){
  const valid= false;

  if(typeof input ==='string' || input instanceof String && input.length > 0)
  {
    //is a string
    valid = true;      
  }
  return valid;
}

function isValidPublisher(input){
  const valid= false;

  if(typeof input ==='string' || input instanceof String)
  {
    //is a string
    valid = true;      
  }
  return valid;
}

function isValidYear(input){
  const thisYear = Date().getFullYear();
  const validYear = false;

  if(input % 1 !=0 && input >= 1900 && input <= thisYear){
      // is whole number and is between 1900 and current year
      validYear = true;
  }
  return validYear;
}

function isValidPrice(input){
  const validPrice = false;

  if(input > 0)
  {
    validPrice = true;
  }
  return validPrice;
}

/////////////////////////////////////////////////////////////////////////////////////////////////


function NewRequest (props) {

  const [formatChoice, setFormat] = useState("");
  const [titleChoice, setTitle] = useState("");
  const [authorChoice, setAuthor] = useState("");
  const [publisherChoice, setPublisher] = useState("");
  const [yearChoice, setYear] = useState("");
  const [priceChoice, setPrice] = useState("");

  async function handleSubmit(event) {
      event.preventDefault();
      //if data = valid....

          const url='http://localhost:4000/requests'; 

          axios.post(url,{
            title: titleChoice,
            author: authorChoice,
            publisher: publisherChoice,
            year: yearChoice,
            price: parseFloat(priceChoice).toFixed(2),  // stes as number (from string, and sets to 2 dp
            format: formatChoice,
            userID: props.currentUser.id,
            status: "Awaiting Allocation",
            dateStatusChange: Date.now(),
            allocatedTo: "",
            authorisedBy: "",

          })
          .then (res =>{
              console.log("New Request Added");
              alert(`New Request Added`);
              window.location.reload(false) 
          })
          .catch((error) => {
            console.log(error);
          });

      // else show error message 
  }
  
  return (  
      <div className="newRequestForm">
        <h2>NEW REQUEST </h2>
          <form onSubmit={handleSubmit}>
            <div className="formMain">
                <div className ="formRow">
                    <div className="formSection">
                      <label htmlFor="format">Format:</label>
                      <select id="format" name="format" placeholder="Select Format" 
                          value={formatChoice} onChange={(e)=>setFormat(e.target.value)}>
                        <option value={"default"} disabled> Select Format </option>
                        <option value={"Book"}>Book</option>
                        <option value={"Audio Book"}>Audio Book</option>
                        <option value={"Braille"}>Braille</option>    
                      </select>
                    </div>                    
                </div>

                <div className ="formRow">
                    <div className="formSection">
                        <label htmlFor="format">Title:</label>
                        <input id="title" name="title" type="text"
                          value={titleChoice} onChange={(e)=>setTitle(e.target.value)} required/>  
                    </div>
                    <div className="formSection">
                        <label htmlFor="format">Author:</label>
                        <input id="author" name="author" type="text"
                          value={authorChoice} onChange={(e)=>setAuthor(e.target.value)} required/> 
                    </div>                    
                </div>

                <div className ="formRow">
                    <div className="formSection">
                        <label htmlFor="format">Publisher:</label>
                        <input id="publisher" name="publisher" type="text"
                            value={publisherChoice} onChange={(e)=>setPublisher(e.target.value)}/> 
                    </div>
                    <div className="formSectionA">
                        <label htmlFor="format">Year:</label>
                        <input id="year" name="year" type="number" min="1900" max="2030"
                          value={yearChoice} onChange={(e)=>setYear(e.target.value)} />  
                    </div>
                    <div className="formSectionB">
                        <label htmlFor="format">Price (£):</label>
                        {/* Drop down for currency option could be added here later */}
                        <input id="price" name="price" min="0" step="0.01" type="number"
                          value={priceChoice} onChange={(e)=>setPrice(e.target.value)} required/>          
                    </div>
                </div>

                <div className ="formRow">
                    <input type="submit" value="SUBMIT REQUEST" id="submitFormBtn"/>
                </div>
            </div>
          </form>
      </div>
    );
  }

export default NewRequest;
