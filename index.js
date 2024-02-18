let box = document.querySelectorAll(".box");
let b = document.querySelector(".box");
window.addEventListener("keydown", (event) => {
  box.forEach((item) => {
    if (event.key == item.innerHTML.toLocaleLowerCase()) {
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
