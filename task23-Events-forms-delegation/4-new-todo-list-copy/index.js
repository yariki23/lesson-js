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

const changeTaskStatus = (event) => {
  const taskId = Number(event.target.dataset.id);
  const currentTask = tasks.find((task) => task.id === taskId);
  currentTask.done = !currentTask.done;
  renderTasks(tasks);
};

listElem.addEventListener("click", changeTaskStatus);

const addTasks = () => {
  const inputElem = document.querySelector(".task-input");
  const obj = {};
  const newInput = inputElem.value;

  if (!newInput) {
    return;
  }

  obj.text = newInput;
  obj.done = false;
  obj.id = tasks.length + 1;
  tasks.unshift(obj);
  inputElem.value = "";
  renderTasks(tasks);
};

btnCreateTask.addEventListener("click", addTasks);
