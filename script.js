let username = document.querySelector("#nameInput");
let submitBtn = document.querySelector("#submitBtn");
let displayName = document.getElementsByClassName("name")[0];

submitBtn.addEventListener("click", () => {
  displayName.textContent = ", " + username.value;
});

let colorBtns = document.getElementsByClassName("color-box");

Array.from(colorBtns).forEach((box) => {
  box.addEventListener("click", () => {
    let color = box.getAttribute("data-color");
    if (color != "yellow") {
      box.setAttribute("style", "color: white; background-color:" + color);
    } else {
      box.setAttribute("style", "background-color:" + color);
    }
  });
});
