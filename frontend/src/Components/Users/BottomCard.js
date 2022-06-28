import React from 'react';
import './users.css';

const BottomCard =(props) =>{
  //If selected user is employee - show auth limit
  const userType = props.isEmp;

  if (props.isEmp === true){
    return(
      <table className="card">
      <tbody>
        <tr>
          <td className="cardHeader">User Type:</td>
          <td className="cardDetails">{userType}</td>
        </tr>
        <tr>
        <td className="cardHeader">Authorisation limit:</td>
          <td className="cardDetails">£{props.limit}</td>
          {/* TO DO - CHANGE TO SHOW AS DECIMAL */}
        </tr>
      </tbody>
    </table>
    );
  }
  else{
    return(
      <table className="card">
        <tbody>
          <tr>
            <td className="cardHeader">User Type:</td>
            <td className="cardDetails">{userType}</td>                                                          
          </tr>
        </tbody>
      </table>
    );
  }
}


export default BottomCard;