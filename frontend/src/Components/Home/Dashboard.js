import React,{Component} from 'react';
import './home.css';

class Dashboard extends Component {
  render(){
    return (
      <div>
        <div className="Dashboard">
          <div className="LeftPanel">
            <h2>Welcome (username)</h2>
            {/* Summary Panel */}
            <div className="PanelItem">
              <p>You have X open requests</p>
            </div>
            <div className="PanelItem">
              <p>You have X complete requests</p>
            </div>
          </div>
          {/* Notifictaion Panel */}
          <div className="RightPanel">
              <h2>Notifications</h2>
              <p>You have no Notifications</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;