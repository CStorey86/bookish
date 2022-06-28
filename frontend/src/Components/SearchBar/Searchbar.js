import React, {useState} from 'react';
import './searchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort} from '@fortawesome/free-solid-svg-icons';


function SearchBar (props)  {

    const [search, setSearchChoice] = useState();
    const [showComplete, setShowComplete] = useState("");  

    return ( 
        <div className="SearchBar">
            <form>
                <div className="formRow2">
                    <div className="Search">
                        <div className="searchBar">
                            <label>Search:</label> 
                            <input type="text"
                                value={search} onChange={(e)=>setSearchChoice(e.target.value)}/>
                            
                            <FontAwesomeIcon icon={faSearch} size="lg" />
                        </div>
                    </div>
                    <div className="completeCheckBox">
                        <div className="checkBox">
                            <input id="complete" type="checkbox" 
                                value={showComplete} onChange={(e)=>setShowComplete(e.target.value)}
                            />
                            <label>Show completed requests</label>  
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}
 

export default SearchBar ;

