import React,{Component} from 'react';
import Select from 'react-select';
import './newRequests.css';

const options=[
  { value: 'Book', label: 'Book'},
  { value: 'Audiobook', label: 'Audio Book'},
  { value: 'Braille', label: 'Braille'},
];

// If currecny option added, extra function will be needed for currency conversion.

class NewRequest extends Component {
  render(){
    return (  
      <div className="newRequestForm">
        <h2>NEW REQUEST </h2>
          <form>
              <div className="formMain">
                <div className ="formRow">
                    <div className="formSection">
                        <label htmlFor="format">FORMAT:</label>
                        <Select id="format" name="format" placeholder="Select Format" options = {options} required/>               
                       
                    </div>
                </div>
                <div className ="formRow">
                    <div className="formSection">
                        <label htmlFor="format">TITLE:</label>
                        <input id="title" name="title" type="text"/> 
                    </div>
                    <div className="formSection">
                        <label htmlFor="format">AUTHOR:</label>
                        <input id="author" name="author" type="text"/> 
                    </div>
                    
                    
                </div>
                <div className ="formRow">
                    <div className="formSection">
                        <label htmlFor="format">PUBLISHER:</label>
                        <input id="publisher" name="publisher" type="text"/> 
                    </div>
                    <div className="formSectionA">
                        <label htmlFor="format">YEAR:</label>
                        <input id="year" name="year" type="number" min="1900" max="2030"/> 
                    </div>
                    <div className="formSectionB">
                        <label htmlFor="format">PRICE (£):</label>
                        {/* Drop down for currenyc option could be added here later */}
                        <input id="price" name="price" min="0" step="0.01" type="number"/>          
                       
                    </div>
                </div>
                <div className ="formRow">
                    <button id="submitFormBtn" type="submit">SUBMIT REQUEST</button>
                </div>
              </div>



    



              
          </form>

 
      </div>

    );
  }
}

export default NewRequest;
