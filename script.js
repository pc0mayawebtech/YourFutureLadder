// Form Validation

const setclear = () => {
    let Errors = document.getElementsByClassName('formErrror');
    for (let value of Errors) {
        value.innerHTML = "";
    }
}

const seterror = (id, error) => {
    let serrors = document.getElementById(id);
    serrors.innerHTML = error;
}

const ladderformValidation = () => {
    const regexsemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regexmobile = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

    let returnVal = true;

    const Fullname = document.forms['myForm']['name'].value;
    if (Fullname === "") {
        seterror("errorFullname", "Name should not be blank");
        returnVal = false;
    } else if (Fullname.length < 6) {
        seterror("errorFullname", "Name should be at least 6 characters");
        returnVal = false;
    } else {
        setclear();
    }

    const Email = document.forms['myForm']['email'].value;
    if (!regexsemail.test(Email)) {
        seterror("errorEmail", "Invalid email address");
        returnVal = false;
    } else if (Email.length < 10) {
        seterror("errorEmail", "Email should be at least 10 characters");
        returnVal = false;
    } else {
        setclear();
    }
    
    const Phone = document.forms['myForm']['phone'].value;
    if (!regexmobile.test(Phone)) {
        seterror("errorPhone", "Invalid phone number");
        returnVal = false;
    } else if (Phone.length < 10) {
        seterror("errorPhone", "Phone number should be at least 10 characters");
        returnVal = false;
    } else {
        setclear();
    }

    return returnVal;
}; 
 

// SLICK CAROUSAL