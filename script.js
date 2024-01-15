function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function toggleNewPasswordVisibility() {
  const newPasswordInput = document.getElementById("newPassword");

  if (newPasswordInput.type === "password") {
    newPasswordInput.type = "text";
  } else {
    newPasswordInput.type = "password";
  }
}

function signIn() {
  alert("Sign in button clicked!");
}

function register() {
  alert("Register button clicked!");
}
