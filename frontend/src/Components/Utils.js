//USEFUL RE-USABLE FUNCTIONS FOR THE APPLICATION
import React from 'react';

export function formatDate(inputDate){

    const newDate = new Date(inputDate);
    var str = String(newDate);
    var newerDate = str.slice(0,15);
    
    return String(newerDate);
}

export function checkIfIsString(input)
{
    var thisIsAString = false;
    if(typeof input === String){
        thisIsAString = true;
    }
    return thisIsAString;
}

export function checkIfEmptyString(input){
    var isEmpty = false;
    if(input.length === 0){
        isEmpty = true;
    }
    return isEmpty;
}

export function countNumberInArray(array){
    return array.length;
}

export function getUserName(user){
    const fullName = user.firstName + " " + user.lastName; 
    return fullName;
}

export function getUserType(user){
    
    var isAuth = user.isAdmin;
    var isEmp = user.isEmployee;
    var userType='';

    if(isAuth === true){
        userType = 'Authoriser';
    }
    else if(isEmp === true){
        userType = 'Employee';
    }
    else {
        userType = 'Standard User';
    }  
    
    return userType;
}


/////////////////////////////////////////  VALIDATIONS - ///////////////////////////////////////////////////

export function isValidInput(input, min, max){
    var validInput = false;
    const len = input.length;

    // IF BETWEEN SPECIFIED PARAMS (FROM MODEL), AND IS A STRING
    if(len >= min && len <=max ){
        validInput = true;
    }
    return validInput;
}

export function isValidpasswordInput(input, min){
    var validInput = false;
    const len = input.length;

    // IF BETWEEN SPECIFIED PARAMS (FROM MODEL), AND IS A STRING
    if(len >= min){
        validInput = true;
    }
    return validInput;
}

export function isValidPasswordMatch(pass, confPass, min){
    var validPassword = false;

    // IF PASSWORD AND CONF PASSWORD ARE BOTH STRINGS
    if(checkIfIsString(pass) === true && checkIfIsString(confPass) === true){
        // IF PASSWORD IS AT LEAST MIN REQ LENGTH
        if(pass.length > min && pass === confPass)
        {
            validPassword = true;
        }
    }
    return validPassword;
}


////////////////////////////////////      SORTING TABLES   ///////////////////////////////////////////////////
