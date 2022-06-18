import React from 'react';
import '../requests.css';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import StatusHistoryBtn from './statusHistoryBtn';



const Buttons =(props) => {

    if(props.request.status === undefined){
        return(
            <></>
        )
    }
    else if(props.request.status === "Awaiting Allocation")             // any stage after allocation
    {
        return(
            <>
                <EditBtn req={props.request} userID= {props.userID}/>
                <DeleteBtn reqID = {props.request._id}/>
            </>
        );
    }
    else if(props.request.status === "Requires further information"){
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
                <StatusHistoryBtn reqID={props.request._id} logs={props.logs}/>             
            </>
        );
    }


}

export default Buttons;

//Requires further information