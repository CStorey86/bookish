import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort} from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
    return ( 
        <div className="SearchBar">
            <div className="Sort">
                <p>Sort <FontAwesomeIcon icon={faSort} /></p>
            </div>
            <div className="Search">
                <p> Search </p>
                <input type="text"/>
                <p> <FontAwesomeIcon icon={faSearch} /></p>
            </div>
        </div>
    );
}
 

export default SearchBar ;

