// Elements
const password = document.querySelector('#password');
const button = document.querySelector('button');

// Password data
let characters = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+<>?:"{}|';
let passwordLength = 12;
let passwordValue = '';

//Create Password
const createPassword = () => {
    passwordValue = '';
    
    for ( let i = 0; i < passwordLength; i++) {
        let number = Math.floor(Math.random() * characters.length);
        passwordValue += characters.substring(number, number + 1);
    } 

    password.value = passwordValue;

}
// Event
button.addEventListener('click',  createPassword);