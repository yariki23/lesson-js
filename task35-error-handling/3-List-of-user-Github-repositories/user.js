const userName = document.querySelector(".user__name");
const userLocation = document.querySelector(".user__location");
const userAvatar = document.querySelector(".user__avatar");

export const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = location ? `from ${location}` : "";
};
