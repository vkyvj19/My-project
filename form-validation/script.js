const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}
String.prototype.isalphabet = function(){
    return !!this.match(/^[a-zA-Z\s]+$/);
}
function checkRequired(inputs){
    inputs.forEach(input => {
        if(input.value.trim()===""){
            errorInput(input, `${getname(input)} is required`);
        }else{
            successInput(input);
        }
    }); 
}

function getname(input){
    return input.id;
}
function errorInput(input, message){
    const formgroup = input.parentElement;
    formgroup.className="form-group error";
    const p = formgroup.querySelector("p");
    p.innerHTML = message;
}
function successInput(input){
    const formgroup = input.parentElement;
    formgroup.className="form-group success";
    const p = formgroup.querySelector("p");
    p.innerHTML = "";
}
function checklength(input, min, max){
    const data = input.value.trim().length;
    if (data < min){
        errorInput(input, `${getname(input)} must be atleast greater that ${min} characters`);
    }else if(data > max){
        errorInput(input, `${getname(input)} must be atleast lesser that ${max} characters`);
    }
    else{
        successInput(input);
    }
}
function checkconfirmpassword(password, password2){
    if(password.value != password2.value){
        errorInput(password2, `confirm password does not match`)
    }else{
        successInput(input);
    }
}

function checkemail(input){
    if(!input.value.trim().isEmail()){
        errorInput(input, `${getname(input)} is not valid`);
    }else{
        successInput(input);
    }
}
function checkusername(input){
    if (!input.value.trim().isalphabet()){
        errorInput(input, `${getname(input)} must be alphabet`);
    }
    
}
form.addEventListener("submit", function(e){
   checkRequired([username,email,password,password2]);
   checklength(username, 5, 10); 
   checklength(password, 5, 10);
   checklength(password2, 5, 10);
   checkemail(email);
   checkconfirmpassword(password, password2);
   checkusername(username);
})