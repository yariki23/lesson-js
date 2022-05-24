const formElem = document.querySelector(".login-form");
const serverUrl = "https://628b1b037886bbbb37b052d2.mockapi.io/api/v1/users";
const submitBtnElem = document.querySelector(".submit-button");
submitBtnElem.setAttribute("disabled", true);

const inputEmail = document.querySelector(".form-input[type='email']");
const inputText = document.querySelector(".form-input[type='text']");
const inputPassword = document.querySelector(".form-input[type='password']");

const onInputChange = () => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    submitBtnElem.removeAttribute("disabled");
    console.log(inputEmail.value);
  } else {
    submitBtnElem.setAttribute("disabled", true);
  }
};
inputEmail.addEventListener("input", onInputChange);
inputText.addEventListener("input", onInputChange);
inputPassword.addEventListener("input", onInputChange);

const sendFormData = (event) => {
  event.preventDefault();

  const user = {
    email: inputEmail.value,
    name: inputText.value,
    password: inputPassword.value,
  };

  return fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
};

formElem.addEventListener("submit", sendFormData);
