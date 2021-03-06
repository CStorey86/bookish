//USEFUL RE-USABLE FUNCTIONS FOR THE APPLICATION

import axios from "../Api/axios";

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

////////////////////////////////////  USER VALIDATIONS - BASED ON MODEL ////////////////////////////////////////////

export function isValidInput(input, min, max){
    var validInput = false;
    const len = input.length;

    // IF BETWEEN SPECIFIED PARAMS (FROM MODEL), AND IS A STRING
    if(len >= min && len <=max && checkIfIsString(input) === true){
        validInput = true;
    }
    return validInput;
}

export function isValidpasswordInput(input, min){
    var validInput = false;
    const len = input.length;

    // IF BETWEEN SPECIFIED PARAMS (FROM MODEL), AND IS A STRING
    if(len >= min && checkIfIsString(input) === true){
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////

export function getUserWithID(userID){
    const user = {};
    const url=`/users/${userID}`;
    axios.get(url)
        .then((Response) => {
                user = Response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return user;
}

export function getUserName(userID){
    const user = getUserWithID(userID);
    const fullName = user.firstName + " " + user.lastName;
    return fullName;
}
