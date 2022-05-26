import React,{Component} from 'react';
import '../requests.css';

const Buttons =(props) => {

    if(props.status === "Awaiting Allocation")             // any stage after allocation
    {
        return(
            <>
                <button className="ActionBtn">Edit</button>
                {/* on click, show overlay showing form for editing request */}
                <button className="ActionBtn">Delete</button>
                {/* on click, show overlay with delete confirmation (y/n buttons)*/}
            </>
        );
    }
    else if(props.status === "Requires further information"){
        return(
            <>
                <button className="ActionBtn-wide">Add further Information</button>
                {/* on click, show overlay form to add more details */}
            </>
        )
    }
    else {
        return(
            <>
                <button className="ActionBtn-wide">View Status History</button>
                {/* on click, show overlay listing status history and dates */}
            </>
        );
    }


}

export default Buttons;

//Requires further information