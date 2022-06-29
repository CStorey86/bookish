import React, {useState} from 'react';
import {formatDate} from '../Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort} from '@fortawesome/free-solid-svg-icons';

// FILTER BY COMPLETE/NOT COMPLETE BASED ON TICK BOX



// SORT BY COLUMN
    // TITLE, AUTHOR, YEAR, DATE, STATUS,

// SEARCH FOR (TITLE, AUTHOR, USER)



const RequestList = (props) => {



    return ( 
        <div className="RequestList" >

            <table className="RequestList">
                <thead>
                    <tr>
                        <td>Title 
                            <button className="sortBtn" >
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td>Author 
                            <button className="sortBtn" >
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td className ="sml-col" >Year 
                            <button className="sortBtn" >
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td>Date Created 
                            <button className="sortBtn" >
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td className ="sml-col">Status
                            <button className="sortBtn" >
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                {props.requests.map((item) => (
                    <tr key={item._id} onClick={props.updateCurrentRequest.bind(this,item)}>
                        <td >{item.title}</td>
                        <td >{item.author}</td>
                        <td className ="sml-col" >{item.year}</td>
                        <td>{formatDate(item.dateStatusChange)}</td>
                        <td className ="sml-col" >{item.status}</td>
                    </tr>
                ))} 
                </tbody>
            </table>         
        </div>
    );
}
 

export default RequestList;
