const buttonElement = document.getElementById("bottone");
const textElement = document.getElementById("task");
// console.log(buttonElement);
// console.log(textElement);

const inserimentoTask = function (event) {
  event.preventDefault();
  // console.log(event);
  // console.log(textElement.value);
  //   creazione lista non ordinata
  const divTaskElement = document.getElementById("taskList");
  const divUl = document.createElement("ul");
  divTaskElement.appendChild(divUl);
  // creazione elementi lista non ordinata
  const divLi = document.createElement("li");
  divLi.innerText = textElement.value;
  divUl.appendChild(divLi);
  // sbarramento li quando vi si clicca con il mouse
  inserimentoCompletato();
};

const inserimentoCompletato = function () {
  if (document.querySelectorAll) {
    const divLiElement = document.querySelectorAll("li");
    console.log(divLiElement);
    for (let index = 0; index < divLiElement.length; index++) {
      divLiElement[index].addEventListener("click", () => {
        divLiElement[index].classList.toggle("sbarramento");
      });
    }
  }
};

window.addEventListener("DOMContentLoaded", () => {
  buttonElement.addEventListener("click", inserimentoTask);
});
