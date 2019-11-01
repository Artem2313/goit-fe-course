/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/
const countTotalSalary = obj => {
    const values = Object.values(obj);

    let total = 0;

    for (const value of values) {
        total += value;
    };

    return total;
}
// Вызовы функции для проверки
console.log(
    countTotalSalary({})
  ); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80
    })
  ); // 330
  