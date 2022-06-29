import React, {useState} from 'react';
import SearchBar from '../../SearchBar/Searchbar';
import {formatDate} from '../../Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort} from '@fortawesome/free-solid-svg-icons';


// FILTER BY COMPLETE/NOT COMPLETE BASED ON TICK BOX


// SORT BY COLUMN
    // TITLE, AUTHOR, YEAR, DATE, STATUS,

// SEARCH FOR (TITLE, AUTHOR, USER)



const RequestList = (props) => {

    const requests = props.requests;
    const activeRequests = props.activeRequests;


    return ( 
        <div className="RequestList" >

            <SearchBar/>

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
                return(
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
