const buttonElement = document.getElementById("bottone");
const textElement = document.getElementById("task");
console.log(buttonElement);
console.log(textElement);
inserimentoTask = function (event, elemento) {
  event.preventDefault();
  console.log(event);
  console.log(textElement.value);
  //   creazione lista non ordinata
  const divTaskElement = document.getElementById("taskList");
  const divUl = document.createElement("ul");
  divTaskElement.appendChild(divUl);
  // creazione elementi lista non ordinata
  const divLi = document.createElement("li");
  divLi.innerText = textElement.value;
  divUl.appendChild(divLi);
};

buttonElement.addEventListener("click", inserimentoTask);

// sbarramento li quando vi si clicca con il mouse
