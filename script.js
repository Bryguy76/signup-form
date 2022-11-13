'use strict';

let errorSwitch = false;
const button = document.getElementById('button');

//FORM INPUTS
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone_number');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');
const form = document.getElementById('form');

//ERROR MESSAGE ELEMENTS
const firstNameError = document.querySelector('.firstNameError');
const lastNameError = document.querySelector('.lastNameError');
const emailError = document.querySelector('.emailError');
const phoneNumberError = document.querySelector('.phoneNumberError');
const passError = document.querySelector('.passwordError');
const pass2Error = document.querySelector('.passwordMatchError');

button.addEventListener('click', e => {
  errorSwitch = false;

  if (firstName.value === '' || firstName.value == null) {
    errorSwitch = true;
    firstNameError.textContent = 'first name is required';
    firstName.classList.add('error');
  }

  if (lastName.value === '' || lastName.value == null) {
    errorSwitch = true;
    lastName.classList.add('error');
    lastNameError.textContent = 'last name is required';
  }

  if (
    !email.value.match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm)
  ) {
    errorSwitch = true;
    email.classList.add('error');
    emailError.textContent = 'not a valid email address';
  }

  if (
    !phoneNumber.value.match(
      /^(\+?1?)?(\(\d{3}\)|\d{3})[ .-]?\d{3}[ .-]?\d{4}$/
    )
  ) {
    errorSwitch = true;
    phoneNumber.classList.add('error');
    phoneNumberError.textContent = 'invalid phone number format';
  }

  if (
    !phoneNumber.value.match(
      /(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/
    )
  ) {
    errorSwitch = true;
    pass.classList.add('error');
    passError.textContent =
      'password not complex enough, try a random password generator';
  }

  if (pass.value != pass2.value) {
    errorSwitch = true;
    pass2.classList.add('error');
    pass2Error.textContent = 'passwords do not match';
  }

  if (errorSwitch == true) {
    e.preventDefault();
  }
});
