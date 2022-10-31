
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input',throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

    evt.preventDefault();


    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onTextareaInput(evt) {
    const formData = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

    const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));

    if(savedMessage) {
        email.value = savedMessage.email;
        message.value = savedMessage.message;      
    }




