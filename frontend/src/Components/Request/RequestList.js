import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort} from '@fortawesome/free-solid-svg-icons';
import './requests.css';

class RequestList extends Component {
  render(){
    return (
      <div className="Requests">
        <h2>MY REQUESTS </h2>
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
        <div className="RequestList" >
            <div className="requestItem">Request 1</div>
            <div className="requestItem">Request 2</div>
            <div className="requestItem">Request 3</div>
            <div className="requestItem">Request 4</div>
            <div className="requestItem">Request 5</div>
        </div>
      </div>
    );
  }
}

export default RequestList;