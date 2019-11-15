/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
const btn = document.querySelector('.button');

const btnHandler = event => {  
  const newBtnVal = Number(event.target.textContent) + 1;
  event.target.textContent = newBtnVal;  
}

btn.addEventListener('click', btnHandler);