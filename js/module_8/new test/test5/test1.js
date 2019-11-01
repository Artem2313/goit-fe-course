/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/


const doc = Array.from(document.querySelectorAll('input[checked]'));
console.log(doc);
const getAllValue = arr => {
  return arr.map(user => user.getAttribute('value'));
};

console.log(getAllValue(doc));