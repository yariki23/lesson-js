"use strict";

const tasks = [
  { text: "Buy milk", done: false, id: 0 },
  { text: "Pick up Tom from airport", done: false, id: 1 },
  { text: "Visit party", done: false, id: 2 },
  { text: "Visit doctor", done: true, id: 3 },
  { text: "Buy meat", done: true, id: 4 },
];
const listElem = document.querySelector(".list");
const input = document.querySelector(".task-input");
const btnCreateTask = document.querySelector(".create-task-btn");

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.setAttribute("data-id", id);
      checkbox.classList.add("list__item-checkbox");

      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);

const changeCheckboxHandler = (event) => {
  const targetCheck = event.target;

  if (targetCheck.className !== "list__item-checkbox") return;
  const idCheckBox = +targetCheck.dataset.id;
  const changeDoneInObj = tasks.find((obj) => obj.id === idCheckBox);
  changeDoneInObj.done = !changeDoneInObj.done;
  renderTasks(tasks);
};
listElem.addEventListener("change", changeCheckboxHandler);

const createEventHandler = () => {
  if (input.value.replace(/\s/g, "")) {
    tasks.push({ text: `${input.value}`, done: false, id: tasks.length });
    input.value = "";
    renderTasks(tasks);
  }
};
btnCreateTask.addEventListener("click", createEventHandler);
