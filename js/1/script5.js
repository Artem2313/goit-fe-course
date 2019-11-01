/* 
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное

  PS: используй тернарный оператор
*/

const value = Number.parseInt(Math.random() * 100);

const type = value%2 === 0 ? "even" : "odd";

console.log(value);

console.log(`${value} is ${type}`);