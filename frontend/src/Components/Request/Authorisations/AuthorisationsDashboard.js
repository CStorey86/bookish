import React,{Component} from 'react';
import './authorisations.css';

import AwaitingAuthorisation from './AwaitingAuthorisation';
import MyAuthorisations from './MyAuthorisations';

class Authorisations extends Component {
  render(){
    return (
      <div className="Authorisations">

            <AwaitingAuthorisation />
            <MyAuthorisations />

      </div>
    );
  }
}

export default Authorisations;