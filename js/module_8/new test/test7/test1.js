/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

const list = document.querySelector("#root");

const createBoxes = num => {
  let j = 30;
  for (let i = 0; i < num; i++) {
    const createDiv = document.createElement("div");
    
    function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    
    createDiv.setAttribute("style", `width:${j}px; height:${j}px; background-color: rgb(${r}, ${g}, ${b})`);
    list.append(createDiv);
    j += 10;
  }
};


createBoxes(5);