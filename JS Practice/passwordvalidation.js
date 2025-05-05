const password = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
const confirmPassword = document.getElementById("cPassword");
const email = document.getElementById("email");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(password.value);
  console.log(email.value);
  let passwordValue = password.value;
  let emailValue = email.value;
  if (
    emailValue.includes(".") &&
    emailValue.includes("@") &&
    emailValue.lastIndexOf(".") - emailValue.indexOf("@") == 4
  ) {
    console.log("Your email is correct");
  } else {
    console.log("Your email is incorrect");
  }
  if (
    passwordValue.length > 7 &&
    passwordValue.includes("@") &&
    /[A-Z]/.test(passwordValue) &&
    /\d/.test(passwordValue)
  ) {
    console.log("password is correct");
  } else {
    console.log("Password is incorrect");
  }
  console.log(confirmPassword.value);
  if (password.value === confirmPassword.value) {
    console.log("Your password is confirmed now");
  } else {
    console.log("Plese retype your password");
  }
});
