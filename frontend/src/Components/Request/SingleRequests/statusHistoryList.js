import React from 'react';

const StatusHistoryList = (props) => {
    return ( 
        <div>
            <div className="RequestList" >
                {props.logs.map((item) => (
                    
                    <div className ="requestItemRow" key={item._id}>
                            <div className="singleReq">

                            </div>
                    </div>
                ))}                
            </div>
        </div>
    );
}
 

export default StatusHistoryList;

