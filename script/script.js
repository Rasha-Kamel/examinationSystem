const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const firstScreen = document.querySelector('.firstScreen');
const secondScreen = document.querySelector('.secondScreen');
const thirdScreen = document.querySelector('.thirdScreen');
const form = document.querySelector(".signUp-form");


counter = 0
nextBtn.addEventListener('click',function(e){
     // Validate current screen before proceeding
     if (counter == 0 && !validateFirstScreen()) return;
     if (counter == 1 && !validateSecondScreen()) return;
     if (counter == 2 && !validateThirdScreen()) return;
    
    counter++;
    if (counter == 1 && validateFirstScreen()) {
        e.preventDefault();
        prevBtn.style.display = 'block';
        firstScreen.style.display = 'none';
        secondScreen.style.display = 'block';

    } 
    if (counter == 2 && validateSecondScreen()) {
        e.preventDefault();
        nextBtn.textContent ="Register";
        prevBtn.style.display = 'block';
        firstScreen.style.display = 'none';
        secondScreen.style.display = 'none';
        thirdScreen.style.display = 'block';

    }
   
    // if (counter == 3 && validateSecondScreen()) {
    //     window.location.href = "./logIn.html";
    // }
        // Save the fname&lname in localStorage.
        localStorage.setItem('f-name', firstName.value);
        localStorage.setItem('l-name', lastName.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('image', image.value);
        // console.log(image.value);
        localStorage.setItem('pass', password.value);
        localStorage.setItem('re-pass', rePassword.value);
       
});


counterprev = 0
prevBtn.addEventListener('click',function(e){


    counterprev++;
    counter--; //this for the div number firstScreen Second ..
    e.preventDefault();
    if (counter == 0) {
        nextBtn.textContent ="Next";
        secondScreen.style.display = 'none';
        firstScreen.style.display = 'block';
        prevBtn.style.display = 'none'; 
    } 
    if (counter == 1 ) {
        nextBtn.textContent ="Next";
        firstScreen.style.display = 'none';
        secondScreen.style.display = 'block';
        thirdScreen.style.display = 'none';
    }
});

// Validate firstScreen Inputs
var firstName = document.getElementById('fName');
var lastName = document.getElementById('lName');
function validateFirstScreen() {
    let isValid = true;
    
    const firstNameError = document.getElementById('fName-error');
    const lastNameError = document.getElementById('lName-error');
    
    if (firstName.value === "") {
        firstNameError.textContent = "Please enter a first name.";
        isValid = false;
    }

    if (lastName.value === "") {
        lastNameError.textContent = "Please enter a last name.";
        isValid = false;
    }

    return isValid;
};

// Validate secondScreen Inputs
var email = document.getElementById('email');;
var image = document.getElementById('img');
function validateSecondScreen() {
    let isValid = true;
    const emailError = document.getElementById('email-error');
    const imageError = document.getElementById('img-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    if (image.files.length === 0) {
        imageError.textContent = "Please upload an image.";
        isValid = false;
    }

    return isValid;
};


// Validate thirdScreen Inputs
var password = document.getElementById('pass');
var rePassword = document.getElementById('re-pass');
function validateThirdScreen() {
    let isValid = true;
    const passwordError = document.getElementById('pass-error');
    const rePasswordError = document.getElementById('rePass-error');

    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (password.value !== rePassword.value) {
        rePasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
};

// Final Form Submission Validation
form.addEventListener("submit", function(event) {
    if (!validateFirstScreen() || !validateSecondScreen() || !validateThirdScreen()) {
        event.preventDefault();
    }
});



