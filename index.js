let box = document.querySelectorAll(".box");
let b = document.querySelector(".box");
let space = document.getElementById("space");
window.addEventListener("keydown", (event) => {
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
window.addEventListener("keydown", (event) => {
  console.log(event.code);
});
