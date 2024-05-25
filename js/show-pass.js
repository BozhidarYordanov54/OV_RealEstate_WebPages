function showPass(event) {
  let input = document.getElementById("pass");
  let icon = document.querySelector(".show-pass i");
  if (icon.classList.contains("fa-eye")) {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
  event.preventDefault();
}

const showPassBtn = document.querySelector(".show-pass");
showPassBtn.addEventListener("click", showPass);
