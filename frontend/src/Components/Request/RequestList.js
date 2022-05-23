import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort} from '@fortawesome/free-solid-svg-icons';

const RequestList = (props) => {
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
            {/* TO DO: LOOK AT DIFFERENT COLOUR CSS BASED ON STATUS (E.G. COMPLETE = GREYED OUT) */}
                <table className="RequestListTable">
                    {props.requests.map((item) => (
                        <tr className="requestItem">
                            <td><a onClick={props.updateCurrentRequest.bind(this,item)}>{item.title} - {item.author}</a></td>
                            <td className="statusCol">{item.status}</td>
                        </tr>
                    ))}
                </table>
                
            </div>
            
        </div>
    );
}
 

export default RequestList;

