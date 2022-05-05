import React,{Component} from 'react';
import './authorisations.css';


class MyAuthorisations extends Component {
  render(){
    return (
      <div className="myAuthorisations">
          <h2>My Authorisations</h2>

          {/* table listing chosen allocation */}
          <div className="authorisationsRow">
            TEST - chosen 1
        </div>
        <div className="authorisationsRow">
            TEST - chosen 2
        </div>

      </div>
    );
  }
}

export default MyAuthorisations;