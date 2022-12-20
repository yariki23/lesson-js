export function finishForm() {
  const inputLogin = document.createElement("input");
  inputLogin.type = "text";
  inputLogin.name = "login";
  const form = document.querySelector(".login-form");
  //   console.log(inputLogin);
  form.prepend(inputLogin);
  const inputPass = document.querySelector("[name = 'password']");
  inputPass.type = "password";
  //   console.log(inputPass);
}
