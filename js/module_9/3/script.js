/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

const refs = {
  sub: document.querySelector('.btn[data-action="sub"]'),
  add: document.querySelector('.btn[data-action="add"]'),
  val: document.querySelector('.value')
};

const minus = () => {
  return refs.val.textContent = Number(refs.val.textContent) + Number(refs.sub.textContent);
}

refs.sub.addEventListener('click', minus);

const plus = () => {
  return refs.val.textContent = Number(refs.val.textContent) + Number(refs.add.textContent);
}

refs.add.addEventListener('click', plus);