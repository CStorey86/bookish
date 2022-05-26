import React from 'react';
import './users.css';
// import Buttons from './buttons';


const SingleUser =(props) => {
    return (
      <div>
        <h2>USER </h2>
          <table className="card">
            <tr>
              <td className="cardHeader">First Name:</td>
              <td className="cardDetails">{}</td>
            </tr>
            <tr>
              <td className="cardHeader">Last Name:</td>
              <td className="cardDetails">{}</td>
            </tr>
            <tr>
              <td className="cardHeader">Email:</td>
              <td className="cardDetails">{}</td>
            </tr>
            <tr>
              <td className="cardHeader">Date Created</td>
              <td className="cardDetails">{}</td>
            </tr>
          </table>
          
          <table className="card">
            <tr>
              <td className="cardHeader">User Type:</td>
              <td className="cardDetails">{}</td>
                                                                                {/* TO DO: CSS TO CHANGE COLOR OF TEXT BASED ON STATUS*/}
            </tr>

          </table>

          {/* <Buttons status={props.request.status} /> */}

          

        </div>

    );
  }


export default SingleUser;