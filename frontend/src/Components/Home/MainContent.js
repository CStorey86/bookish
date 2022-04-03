import React,{Component} from 'react';
import './home.css';

import { Dashboard } from './Dashboard';


class MainContent extends Component {
  render(){
    return (
      <div>
          <Dashboard userType="Employee"/>
      </div>
    );
  }
}

export default MainContent;