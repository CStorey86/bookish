import React, {useState} from 'react';
import './searchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort} from '@fortawesome/free-solid-svg-icons';

function SearchBar (props)  {

    const [sortChoice, setSortChoice] = useState("Book");

    return ( 
        <div className="SearchBar">
            <form>
                <div className="Sort">
                    <div className="sortBy">
                        <select id="SortBy" name="sortBy"
                            value={sortChoice} onChange={(e)=>setSortChoice(e.target.value)}
                        >
                            <option value={"default"}> Sort By: Date Created: Newest to Oldest </option>
                            <option value={""}>  Sort By: Date Created: Oldest to Newest </option>
                            <option value={""}> Sort By: Status: A-Z</option>
                            <option value={""}> Sort By: Status: Z-A</option>
                        </select>
                    </div>
                    <div className="">
                        
                    </div>
                   
                   {/* 
                   
                   
                    */}

                    {/* <FontAwesomeIcon icon={faSort}/> */}
                </div>

                {/* <div className="Search">
                    <p> Search </p>
                    <input type="text"/>
                    <p> <FontAwesomeIcon icon={faSearch} /></p>
                </div> */}
            </form>
        </div>

    );
}
 

export default SearchBar ;

