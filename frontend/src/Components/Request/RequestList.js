import React from 'react';
import SearchBar from '../SearchBar.js/Searchbar';

const RequestList = (props) => {
    return ( 
        <div>
            <SearchBar />
            <div className="RequestList" >
                {props.requests.map((item) => (
                    <div className ="requestItemRow" key={item._id}>
                        <a onClick={props.updateCurrentRequest.bind(this,item)}>
                            <div className="singleReq">
                                {item.title} - {item.author} - {item.year}
                            </div>
                        </a>
                  </div>
                ))}                
            </div>
            
        </div>
    );
}
 

export default RequestList;

