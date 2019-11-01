/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки

const countProps = obj => {
    let keysNumber = Object.keys(obj).length;
    return keysNumber;
}

console.log(
    countProps({})
  ); // 0
  
  console.log(
    countProps({a: 1, b: 3, c: 'hello'})
  ); // 3