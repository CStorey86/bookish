import React from 'react';
import './profile.css';
import {formatDate} from '../Utils';


const AuthLimitRow =(props)=> {

    const isEmp = props.isEmp;

    if(isEmp === true)
    {
        return(
            <div className="profileRow">
               <div className="profileRowleft">
                    AUTHORISATION LIMIT:
                </div>
                <div className="profileRowRight">
                    £{props.aLimit}.00
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                
            </div>
        )
    }

}


export default AuthLimitRow;

            
            // <div className="profileRow">
 
            // </div>