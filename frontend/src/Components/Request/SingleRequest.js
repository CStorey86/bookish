import React,{Component} from 'react';
import './requests.css';

class SingleRequest extends Component {
  render(){
    return (
        <div className="SingleRequest">
            <h2>REQUEST </h2>
            <div className="card">
                <p>Title: </p>
                <p>Author: </p>
                <p>Year: </p>
                <p>Publisher: </p>
                <p>Cost: </p>
                <p className="status">Status: </p>
            </div>
                

            {/* If allocated - this button cant be seen */}
            <button className="ActionBtn">Delete</button>
            {/* If allocated - this button changes to "Add Information" */}
            <button className="ActionBtn">Edit</button>
        </div>
    );
  }
}

export default SingleRequest;