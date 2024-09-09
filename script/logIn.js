//  //to get userdata
 console.log(localStorage.getItem('f-name'),
        localStorage.getItem('l-name'),
        localStorage.getItem('email'),
        localStorage.getItem('image'),
        localStorage.getItem('pass'),
        localStorage.getItem('re-pass'));

var vaildEmail = localStorage.getItem('email'); //get data
var vaildPass = localStorage.getItem('pass');

const btn = document.querySelector(".btn");
const form = document.querySelector("logIn-form");
const msgError = document.querySelector(".msgError");
var email = document.getElementById('userEmail');
var password = document.getElementById('userPass');

btn.addEventListener("click",function(event){
    event.preventDefault();
    msgError.style.display = "none";
   if (validEmail() && validPassword()){
    window.location.href = "./welcome.html";
   };
   

});

function validEmail(){
    let isValid = true;
    const emailError = document.getElementById('email-error');
    if ( email.value != vaildEmail){
        msgError.style.display = "block";
        emailError.textContent = "Please enter a correct mail.";
        isValid = false; 
    }
    if (email.value == ""){
        msgError.style.display = "block";
        emailError.textContent = "Please enter a valid email.";
        isValid = false; 
    }
    return isValid;
};

function validPassword(){
    let isValid = true;
    const passError = document.getElementById('pass-error');
    if (password.value != vaildPass ){
        passError.textContent = "Please enter a correct Password.";
        msgError.style.display = "block";
        isValid = false; 
    }
    if (password.value == ""){
        emailError.textContent = "Please enter a password.";
        msgError.style.display = "block";
        isValid = false; 
    }
    return isValid;
};
