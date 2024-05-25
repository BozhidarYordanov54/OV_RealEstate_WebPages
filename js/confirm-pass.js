function confirmPass() {
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm-password");
  if (confirm.value === password.value) {
    confirm.setCustomValidity("");
  } else {
    confirm.setCustomValidity("Passwords do not match");
  }
}
