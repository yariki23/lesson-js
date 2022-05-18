const userAvatar = document.querySelector(".user__avatar");
const userName = document.querySelector(".user__name");
const userLocation = document.querySelector(".user__location");

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
};

const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = location ? `from ${location}` : "";
};

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then((userData) => renderUserData(userData));
};

showUserBtnElem.addEventListener("click", onSearchUser);
