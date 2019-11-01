/*
* Есть массив имен пользователей
* Используя методы массива, последовательно выполнить указанные операции
*/

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить первый элемент массива
users.shift();
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
users.pop()
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
users.unshift("Lux");
console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
users.push("Jay", "Kiwi")
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = "Ajax";
const userToDeleteIndex = users.indexOf(userToDelete);

console.log(userToDeleteIndex)

users.splice(userToDeleteIndex, 1);

console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
const usersToInsert = "Kong";
const userToInsertBefore = "Jay";
const userToInsertBeforeIndex = users.indexOf(userToInsertBefore);
console.log(userToInsertBeforeIndex);
users.splice(userToInsertBeforeIndex, 0, usersToInsert);
console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]