"use strict";

const wrapper = document.getElementById("wrapper");
const btn = document.getElementById("btn");
const timeout = setTimeout(() => {
  wrapper.append(createPopupHTML());
}, 3000);

btn.addEventListener("click", () => {
  clearTimeout(timeout);
});

function createPopupHTML() {
  const btn = document.createElement("button");
  btn.classList.add("popupbtn");
  btn.addEventListener("click", ({ target: { parentElement } }) => {
    parentElement.remove();
  });
  btn.append("subscribe");
  const elem = document.createElement("div");
  elem.classList.add("popup");
  elem.append(btn);
  return elem;
}
