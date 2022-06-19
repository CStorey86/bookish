import React,{Component,useState} from 'react';
import '../../requests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const RequestAuthorisation =(props) => {


    return(
        <>
            <button className="ActionBtn-wide" > Request Authorisation</button>
            {/* on click, show overlay with delete confirmation (y/n buttons)*/}          

        </>
    )
}

export default RequestAuthorisation
