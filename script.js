const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show Input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// Show success outline
const showSuccess = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Chech email is valid
const isValidEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Event Listeners
form.addEventListener("submit", e => {
  e.preventDefault();
  // username validation
  if (username.value === "") {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }
  // email validation
  if (email.value === "") {
    showError(email, "email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "email is not valid");
  } else {
    showSuccess(email);
  }
  // password validation
  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }
  // password validation
  if (password2.value === "") {
    showError(password2, "Confirm password");
  } else {
    showSuccess(password2);
  }
});
