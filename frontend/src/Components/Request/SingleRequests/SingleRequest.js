import React from 'react';
import '../requests.css';
import Buttons from './buttons';

const SingleRequest =(props) => {
    return (
      <div>
        <h2>REQUEST </h2>
          <table className="card">
            <tbody>
              <tr>
                <td className="cardHeader">Title:</td>
                <td className="cardDetails">{props.request.title}</td>
              </tr>
              <tr>
                <td className="cardHeader">Author:</td>
                <td className="cardDetails">{props.request.author}</td>
              </tr>
              <tr>
                <td className="cardHeader">Year:</td>
                <td className="cardDetails">{props.request.year}</td>
              </tr>
              <tr>
                <td className="cardHeader">Publisher:</td>
                <td className="cardDetails">{props.request.publisher}</td>
              </tr>
              <tr>
                <td className="cardHeader">Price:</td>
                <td className="cardDetails">£{props.request.price}</td>
                {/* This could be ammended based on currency selection on newRequest page  - need "currency" attribute adding to db and models etc*/}
              </tr>
            </tbody>
          </table>
          
          <table className="card">
            <tbody>
              <tr>
                <td className="cardHeader">Status:</td>
                <td className="cardDetails">{props.request.status}</td>
                                                                                  {/* TO DO: CSS TO CHANGE COLOR OF TEXT BASED ON STATUS*/}
              </tr>

              <tr>
                <td className="cardHeader">Last Status Update:</td>
                <td className="cardDetails">{props.request.dateStatusChange}</td>
                                                                                  {/* TO DO: CSS TO CHANGE FORMAT OF DATE */}
              </tr>
            </tbody>
          </table>

          <Buttons request={props.request} currentUser={props.user} />
        </div>
    );
  }


export default SingleRequest;