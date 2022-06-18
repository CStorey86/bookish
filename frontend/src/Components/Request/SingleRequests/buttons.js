import React from 'react';
import '../requests.css';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';



const Buttons =(props) => {

    if(props.status === undefined){
        return(
            <></>
        )
    }
    else if(props.status === "Awaiting Allocation")             // any stage after allocation
    {
        return(
            <>
                <EditBtn req={props.request}/>
                <DeleteBtn reqID = {props.id}/>
            </>
        );
    }
    else if(props.status === "Requires further information"){
        return(
            <>
                <button className="ActionBtn-wide" >Add further Information</button>
                {/* on click, show overlay form to add more details */}
            </>
        )
    }
    else {
        return(
            <>
                <button className="ActionBtn-wide" >View Status History</button>
                {/* on click, show overlay listing status history and dates */}

            </>
        );
    }


}

export default Buttons;

//Requires further information