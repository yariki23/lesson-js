export function finishList() {
  const list = document.querySelector(".list");
  const specialLi = document.querySelector(".special");
  const prependLi = document.createElement("li");
  const appendLi = document.createElement("li");
  const beforeLi = document.createElement("li");
  const afterLi = document.createElement("li");

  prependLi.textContent = "1";
  list.prepend(prependLi);

  appendLi.textContent = "8";
  list.append(appendLi);

  beforeLi.textContent = "4";
  specialLi.before(beforeLi);

  afterLi.textContent = "6";
  specialLi.after(afterLi);
}
//  list.prepend((document.createElement("li").innerHTML = "1"));
//  list.append((document.createElement("li").innerHTML = "8"));
//  specialList.before((document.createElement("li").textContent = "4"));
//  specialList.after((document.createElement("li").textContent = "6"));
