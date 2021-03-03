function findError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var firstname = document.form.firstName.value;
    var lastname = document.form.lastName.value;
    var email = document.form.email.value;
    var date = document.form.date.value;
    var dept = document.form.dept.value;
    var password = document.form.password.value;


    var lastNameErr = firstNameErr= emailErr = dateErr= genderErr= deptErr=passErr= true;

    if(firstname == "") {
        findError("firstNameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(firstname) === false) {
            findError("firstNameErr", "Letters only");
        } else {
            findError("firstNameErr", "");
            firstNameErr = false;
        }
    }
    if(lastname == "") {
        findError("lastNameErr", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(lastname) === false) {
            findError("lastNameErr", "Letters only");
        } else {
            findError("lastNameErr", "");
            lastNameErr = false;
        }
    }

    if(email == "") {
        findError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regex.test(email) === false) {
            findError("emailErr", "Please enter a valid email address");
        } else{
            findError("emailErr", "");
            emailErr = false;
        }
    }
    if(date == "") {
        findError("dateErr", "Please select a date with the icon");
    } else {
        findError("dateErr", "");
        dateErr = false;
    }
    
    
    var checks = document.getElementsByName("gender");
    var newvar=0;
    for (var i = 0; i < checks.length; i++){
        if(checks[i].checked==true){
            newvar++;

        }

    }
    if(newvar==1){
        findError("genderErr", "");
        genderErr=false;
    }else {
        findError("genderErr", "Select a gender");

    }

    if(dept == "") {
        findError("deptErr", "Please select your department");
    } else {
        findError("deptErr", "");
        deptErr = false;
    }
    

    // // function validatePasword(){
    //     var regex = /^(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{15,}$/;
    //     var upper = /[A-Z]/;
    //     var lower = /[a-z]/;
    //     var number = /[0-9]/;
    //     var special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    //     var length = 15;

    //     if(pasword == "") {
    //         findError("passErr", "Please Enter a password");
    //     }else if(regex.test(password) === false && upper.test(password) === false){
    //         findError("passErr","Password must have an upercase letter" );
    //     }else if(regex.test(password) === false && lower.test(password) === false){
    //         findError("passErr","Password must have a lowercase letter" );
    //     }else if(regex.test(password) === false && number.test(password) === false){
    //         findError("passErr","Password must have a number" );
    //     }else if(regex.test(password) === false && special.test(password) === false){
    //         findError("passErr","Password must have a special character" );

    //     }else if(regex.test(password) === false && password.length<length){
    //         findError("passErr","Password must have 15 or more characters" );
    //     }else{
    //     findError("passErr", "");     
    //     passErr = false;
    //     }
            //var regex = /^(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{15,}$/;
            // if (regex.test(password) === false && password.length<15) {
            //     findError("passErr","Password must be more than or equals to 15 characters" );
            

    if(password == "") {
        findError("passErr", "Please Enter a password");
    } else {
        var regex = /^(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{15,}$/;
        if(regex.test(password) === false && password.length<15) {
            findError("passErr", "Passwords must:<br> Have at least an uppercase letter,<br> A lowercase letter,<br> A digit,<br> A special character,<br>And must be longer than or equal 15 characters");
        } else{
            findError("passErr", "");
            passErr = false;
        }
    }

    if((firstNameErr || lastNameErr|| emailErr|| dateErr|| genderErr|| deptErr|| passErr) === true) {
        return false;
    }
};
