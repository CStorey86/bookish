import React from 'react';
import './users.css';
import BottomCard from './BottomCard';
import Buttons from './Buttons';
import {formatDate} from '../Utils';


const SingleUser =(props) => {

    var userType='';
    var date = (formatDate(props.user.createdDate))

    if((props.user.isAdmin) === true){
        userType = 'Authoriser';
    }
    else if((props.user.isEmployee) === true){
        userType = 'Employee';
    }
    else{
        userType = 'Standard User';
    }

    return (
      <div>
          <table className="card">
            <tbody>
              <tr>
                <td className="cardHeader">First Name:</td>
                <td className="cardDetails">{props.user.firstName}</td>
              </tr>
              <tr>
                <td className="cardHeader">Last Name:</td>
                <td className="cardDetails">{props.user.lastName}</td>
              </tr>
              <tr>
                <td className="cardHeader">Email:</td>
                <td className="cardDetails">{props.user.email}</td>
              </tr>
              <tr>
                <td className="cardHeader">Date Created</td>
                <td className="cardDetails">{date}</td>
              </tr>
            </tbody>
          </table>

          <BottomCard userType={userType} limit={props.user.authLimit}/>
          <Buttons userID={props.user._id}/>

          

        </div>

    );
  }


export default SingleUser;