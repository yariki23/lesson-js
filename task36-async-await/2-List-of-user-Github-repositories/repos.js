const listElem = document.querySelector(".repo-list");

export const cleanReposList = () => {
  listElem.innerHTML = "";
};

export const fetchRepositories = (url) =>
  fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to load data");
  });

export const renderRepos = (reposList) => {
  const reposListElems = reposList.map(({ name }) => {
    const listElem = document.createElement("li");
    listElem.classList.add("repo-list__item");
    listElem.textContent = name;

    return listElem;
  });
  cleanReposList();
  listElem.append(...reposListElems);
};
