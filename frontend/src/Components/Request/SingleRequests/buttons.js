import React,{Component} from 'react';
import '../requests.css';

const Buttons =(props) => {

    if(props.status !== "Awaiting Allocation")             // any stage after allocation
    {
        return(
            <>
                <button className="ActionBtn-wide">View Status History</button>
                {/* on click, show overlay listing status history and dates */}
            </>
        );
    }
    else {
        return(
            <>
                <button className="ActionBtn">Edit</button>
                <button className="ActionBtn">Delete</button>
            </>
        );
    }


}

export default Buttons;
