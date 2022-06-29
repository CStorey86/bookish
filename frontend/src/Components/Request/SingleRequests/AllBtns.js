import React from 'react';
import '../requests.css';
import ViewStatusHistory from './Buttons/ViewStatusHistory';

const ButtonChoice = (props) => {
  const userName = "";

  if(props.reqID == ""){
    return(
      <div></div>
    )
  }
  else{
    return(
      <div className="btnPanel">
          <ViewStatusHistory reqID={props.reqID}/>
      </div>
    )
  }
}

export default ButtonChoice;