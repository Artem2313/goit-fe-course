/*
* Есть массив имен пользователей users
*
* Напиши цикл, который для каждого пользователя будет выводить в консоль
* сообщение в формате [номер элемента] - [значение элемента]. 
* 
* Нумерация должна начинаться с 1. К примеру для первого элемента массива
* с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
*
* Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
*/

const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
for (let i = 0; i < users.length; i += 1) {
    console.log(users[i], i+1);
  }