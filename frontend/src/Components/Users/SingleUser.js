import React from 'react';
import './users.css';
import BottomCard from './BottomCard';
import Buttons from './Buttons/Buttons';
import {formatDate, getUserType} from '../Utils';


const SingleUser =(props) => {
    var date = (formatDate(props.user.createdDate));

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

          <BottomCard user={props.user} limit={props.user.authLimit}/>
          <Buttons user={props.user} />
        </div>
    );
  }


export default SingleUser;