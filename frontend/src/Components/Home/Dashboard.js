import React,{Component} from 'react';
import './home.css';

let user={
  id: "62860fe823c9c0ba976b9ba7",
  isEmp: true
}


class Dashboard extends Component {

  getCompleteRequestCounts(thisUserID){
    var completeCount = 0;

    //for each request record in db
      // if(status="Complete" && userID=thisUserID){
      //     completeCount ++;
    
      return {completeCount};
  }
  getOpenRequestCounts(thisUserID){
    var openCount = 0;

    //for each request record in db
      // if(status!="Complete" && userID=thisUserID){
      //     completeCount ++;
      // }
    
      return {openCount};
  }


  render(){

    var completeCount = this.getCompleteRequestCounts(user.id);
    var openCount = this.getOpenRequestCounts(user.id);

    return (
      <div>
        <div className="Dashboard">
          <div className="LeftPanel">
            <h2>Welcome (Username)</h2>
            {/* Summary Panel */}
            <div className="PanelItem">
              <p>You have X open requests</p>
              {/* /on click - open my requests page -filtering to show only open requests */}
            </div>
            <div className="PanelItem">
              <p>You have Y complete requests</p>
              {/* /on click - open my requests page -filtering to show only closed requests */}
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