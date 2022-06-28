import React from 'react';
import SearchBar from '../SearchBar/Searchbar';
import {formatDate} from '../Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort} from '@fortawesome/free-solid-svg-icons';

const RequestList = (props) => {

    const { requests } = props.requests;
    const [sortedField, setSortedField] = React.useState(null);
  
    // let sortedRequests = [...requests];
    // if (sortedField !== null) {
    //     sortedProducts.sort((a, b) => {
    //     if (a[sortedField] < b[sortedField]) {
    //         return -1;
    //     }
    //     if (a[sortedField] > b[sortedField]) {
    //         return 1;
    //     }
    //     return 0;
    //     });
    // }

    // sortedProducts.sort((a, b) => {
    //     if (a[sortConfig.key] < b[sortConfig.key]) {
    //       return sortConfig.direction === 'ascending' ? -1 : 1;
    //     }
    //     if (a[sortConfig.key] > b[sortConfig.key]) {
    //       return sortConfig.direction === 'ascending' ? 1 : -1;
    //     }
    //     return 0;
    //   });
    
    return ( 
        <div className="RequestList" >
            <SearchBar/>
            <table className="RequestList">
                <thead>
                    <tr>
                        <td className ="med-col">Title 
                            <button className="sortBtn" onClick={() => setSortedField('title')}>
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td className ="med-col">Author 
                            <button className="sortBtn" onClick={() => setSortedField('autor')}>
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td className ="sml-col" >Year 
                            <button className="sortBtn" onClick={() => setSortedField('year')}>
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td className ="lrg-col">Date Created 
                            <button className="sortBtn" onClick={() => setSortedField('dateStatusChange')}>
                                <FontAwesomeIcon icon={faSort} />
                            </button>
                        </td>
                        <td className ="sml-col">Status
                            <button className="sortBtn" onClick={() => setSortedField('status')}>
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
                        <td className ="sml-col" >{item.year}</td>
                        <td className ="wide-col">{formatDate(item.dateStatusChange)}</td>
                        <td className ="sml-col" >{item.status}</td>
                    </tr>
                ))} 
                </tbody>
            </table>         
        </div>
    );
}
 

export default RequestList;
