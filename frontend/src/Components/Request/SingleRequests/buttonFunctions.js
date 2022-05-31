import React from 'react';
import '../requests.css';
import axios from 'axios';

export function deleteOn(){
    document.getElementById("deleteRequest").style.display = "block";     
    document.getElementById("editRequest").style.display = "none"; 
}

export function deleteOff(){
    document.getElementById("deleteRequest").style.display = "none";     
}

export function editOn(){
    document.getElementById("editRequest").style.display = "block"; 
    document.getElementById("deleteRequest").style.display = "none";      
}
export function editOff(){
    document.getElementById("editRequest").style.display = "none";     
}

export function deleteRequest(){
    //get req id
    //set const url
    //axios delete command
    //confirm deleted
    //refresh list
    deleteOff();
 
}
