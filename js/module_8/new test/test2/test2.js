/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
const categoriesFirstLi = document.querySelector(".list");
console.log(categoriesFirstLi);
const firstChild = categoriesFirstLi.firstElementChild;
console.log(firstChild);
const lastChild = categoriesFirstLi.lastElementChild;
console.log(lastChild);

firstChild.style.color = 'red';
lastChild.style.color = 'blue';
