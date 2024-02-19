let box = document.querySelectorAll(".box");
let b = document.querySelector(".box");
let space = document.getElementById("space");
let input = document.querySelector("input");

window.addEventListener("keydown", (event) => {
  input.focus();
  if (event.code == "Space") {
    space.classList.add("clicked");
  }
  box.forEach((item) => {
    if (event.key === item.innerHTML.toLocaleLowerCase()) {
      item.classList.add("clicked");
    }
  });
});
window.addEventListener("keyup", () => {
  box.forEach((item) => {
    if (item.classList.contains("clicked")) {
      item.classList.remove("clicked");
    }
  });
});
