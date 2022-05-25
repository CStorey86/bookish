import React,{Component,useState} from 'react';
import Select from 'react-select';
import './newRequests.css';
import axios from 'axios';

const options=[
  { value: 'Book', label: 'Book'},
  { value: 'Audiobook', label: 'Audio Book'},
  { value: 'Braille', label: 'Braille'},
];

// If currency option added, extra function will be needed for currency conversion.

function NewRequest () {

  const [format, setFormat] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  //Error Message
    // const [errMsg, setErrMsg] = useState("");


    async function handleSubmit(event) {
        event.preventDefault();

        const url='http://localhost:4000/requests'; 

        axios.post(url,{
          format: format,
          title: title,
          author: author,
          publisher: publisher,
          year: year,
          price: price,
          status: "Awaiting Allocation",
          dateStatusChange: Date.now()
        })
        .then (res =>{
            console.log("New Request Added");
        })
    }

    return (  
      <div className="newRequestForm">
        <h2>NEW REQUEST </h2>
          <form onSubmit={handleSubmit}>
           <div className="formMain">
              <div className ="formRow">
                    <div className="formSection">
                      <label htmlFor="format">Format:</label>
                      <Select id="format" name="format" placeholder="Select Format" options = {options} required
                        // value={format} onChange={(e)=>setFormat(e.target.value)}
                      />        
                    </div>                    
                </div>

                <div className ="formRow">
                    <div className="formSection">
                        <label htmlFor="format">Title:</label>
                        <input id="title" name="title" type="text"
                          value={title} onChange={(e)=>setTitle(e.target.value)} />  
                    </div>
                    <div className="formSection">
                        <label htmlFor="format">Author:</label>
                        <input id="author" name="author" type="text"
                          value={author} onChange={(e)=>setAuthor(e.target.value)} /> 
                    </div>                    
                </div>

                <div className ="formRow">
                    <div className="formSection">
                        <label htmlFor="format">Publisher:</label>
                        <input id="publisher" name="publisher" type="text"
                            value={publisher} onChange={(e)=>setPublisher(e.target.value)} /> 
                    </div>
                    <div className="formSectionA">
                        <label htmlFor="format">Year:</label>
                        <input id="year" name="year" type="number" min="1900" max="2030"
                          value={year} onChange={(e)=>setYear(e.target.value)} />  
                    </div>
                    <div className="formSectionB">
                        <label htmlFor="format">Price (£):</label>
                        {/* Drop down for currency option could be added here later */}
                        <input id="price" name="price" min="0" step="0.01" type="number"
                          value={price} onChange={(e)=>setPrice(e.target.value)} />          
                    </div>
                </div>

                <div className ="formRow">
                    <input type="submit" value="SUBMIT REQUEST" id="submitFormBtn"/>
                    {/* <button id="submitFormBtn" type="submit">SUBMIT REQUEST</button> */}
                </div>
              </div>



    



              
          </form>

 
      </div>

    );
  }

export default NewRequest;
