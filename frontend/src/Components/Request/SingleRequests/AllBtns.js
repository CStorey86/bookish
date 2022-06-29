import React from 'react';
import '../requests.css';
import ViewStatusHistory from './Buttons/statusHistoryBtn';

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
          <ViewStatusHistory />
      </div>
    )
  }
}

export default ButtonChoice;