import React, {useState} from 'react';
import './searchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort} from '@fortawesome/free-solid-svg-icons';

function showIfComplete(showComplete){
    const show = false;
    if(showComplete === checked)
    {
        show = true;
    }
    return show;
}

function SearchBar (props)  {

    const [sortChoice, setSortChoice] = useState("Sort By: Date Created: Newest to Oldest");
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
                    <div className="Sort">
                        <div className="sortBy">
                            <select id="SortBy" name="sortBy"
                                value={sortChoice} onChange={(e)=>setSortChoice(e.target.value)}>
                                    <option value={"default"}> Sort By: Date Created: Newest to Oldest </option>
                                    <option value={""}>  Sort By: Date Created: Oldest to Newest </option>
                                    <option value={""}> Sort By: Status: A-Z</option>
                                    <option value={""}> Sort By: Status: Z-A</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="formRow3">
                    <div className="completeCheckBox">
                        <div className="checkBox">
                            <input id="complete" type="checkbox" 
                                value={showComplete} onChange={(e)=>setShowComplete(e.target.value)}/>
                            <label>Show completed requests</label>  
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}
 

export default SearchBar ;

