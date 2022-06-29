import React, {useState} from 'react';
import {formatDate} from '../../Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSearch} from '@fortawesome/free-solid-svg-icons';
import '../requests.css';
import '../../SearchBar/searchBar.css';

// FILTER BY COMPLETE/NOT COMPLETE BASED ON TICK BOX


// SORT BY COLUMN
    // TITLE, AUTHOR, YEAR, DATE, STATUS,

// SEARCH FOR (TITLE, AUTHOR, USER)



const RequestList = (props) => {

    const requests = props.requests;

    const [search, setSearchChoice] = useState();

    const [showComplete, setShowComplete] = useState(false); 
    const handleClick = () => setShowComplete(!showComplete);    

    const reqList = useState(props.activeRequests);

    


    return ( 
        <div className= "RequestList">
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
                                onClick={handleClick} checked={showComplete}
                                value={showComplete} onChange={(e)=>setShowComplete(e.target.value)}
                            />
                            <label>Show completed requests</label>  
                        </div>
                    </div>
                </div>
            </form>
            </div>

            <table className="RequestList">
                <thead>
                    <tr>
                        <td className ="med-col">Title 
                            <button className="sortBtn" >
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td className ="med-col">Author 
                            <button className="sortBtn" >
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td className ="smlst-col" >Year 
                            <button className="sortBtn" >
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td className ="lrg-col">Date Created 
                            <button className="sortBtn" >
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td className ="sml-col">Status
                            <button className="sortBtn" >
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td className ="sml-col">User
                            <button className="sortBtn" >
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {props.requests.map((item) => (
                        <tr key={item._id} onClick={props.updateCurrentRequest.bind(this,item)}>
                            <td className ="med-col">{item.title}</td>
                            <td className ="med-col">{item.author}</td>
                            <td className ="smlst-col" >{item.year}</td>
                            <td className ="wide-col">{formatDate(item.dateStatusChange)}</td>
                            <td className ="sml-col" >{item.status}</td>
                            <td className ="sml-col" >{item.userID}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>         
        </div>
    );
}
 

export default RequestList;
