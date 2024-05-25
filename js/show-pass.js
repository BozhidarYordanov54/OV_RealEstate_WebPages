function showPass(event) {
  event.preventDefault();

  let targetInputId = event.currentTarget.getAttribute("data-target");
  let input = document.getElementById(targetInputId);
  let icon = event.currentTarget.querySelector("i");

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
}

const showPassBtns = document.querySelectorAll(".show-pass");
showPassBtns.forEach((btn) => {
  btn.addEventListener("click", showPass);
});
