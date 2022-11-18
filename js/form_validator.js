// show a message with a type of the input
function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  // update the class for the input
  input.className = type ? 'email-success' : 'email-error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  //eslint-disable-next-line
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
    // check if email is in small letter;
  } if (email.toLowerCase() === email) {
    return true;
  }
  return showError(input, invalidMsg);
}

const form = document.querySelector('#contact-form');
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format !';

form.addEventListener('submit',(event) => {
  // validate the form
  const emailValid = validateEmail(form.elements['.email'], EMAIL_REQUIRED, EMAIL_INVALID);
  if (!emailValid) {
    event.preventDefault();
  }
});