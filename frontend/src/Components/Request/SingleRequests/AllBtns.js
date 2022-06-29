import React from 'react';
import '../requests.css';
import ViewStatusHistory from './Buttons/StatusHistoryBtn';


const ButtonChoice = (props) => {
  const userName = "";

  if(props.requestID == ""){
    return(
      <div></div>
    )
  }
  else{
    return(
      <div className="btnPanel">
          <ViewStatusHistory reqID={props.requestID} />
      </div>
    )
  }
}

export default ButtonChoice;