import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort} from '@fortawesome/free-solid-svg-icons';

const UsersList = (props) => {
    return ( 
        <div>            
            <div className="SearchBar">
                <div className="Sort">
                    <p>Sort <FontAwesomeIcon icon={faSort} /></p>
                </div>
                <div className="Search">
                    <p> Search </p>
                        <input type="text"/>
                        <p> <FontAwesomeIcon icon={faSearch} />
                    </p>
                </div>
            </div>
            <div className="RequestList" >
                {props.requests.map((item) => (
                    <div className ="requestItemRow" key={item._id}>
                        <a  onClick={props.updateCurrentUser.bind(this,item)}>
                            <div>
                                {item.fistName} {item.lastName}
                            </div>
                        </a>
                  </div>
                ))}
                
            </div>
            
        </div>
    );
}
 

export default UsersList;

