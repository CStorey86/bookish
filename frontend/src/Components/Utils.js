//USEFUL RE-USABLE FUNCTIONS FOR THE APPLICATION

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

    // IF BETWEEN SPECIFIED PARAMS (FROM MODEL), AND IS A STRING
    if(input.length >= min && input.length <=max && checkIfIsString(input) === true){
        validInput = true;
    }
    return validInput;
}

export function isValidPassword(pass, confPass, min){
    var validPassword = false;

    // IF PASSWORD IS LESS THAN MIN REQ LENGTH
    if(pass.length > min && pass === confPass)
    {
        validPassword = true;
    }
    return validPassword;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

export function getUserName(user){
    const fName = user.firstName;
    const lName = user.lastName;
    const fullName = fName + " " + lName;
    return fullName;
}
