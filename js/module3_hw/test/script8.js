/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const message = "May the force be with you";
let longestWord;

let messageArr = message.split(' ');

longestWord = messageArr[0];

for (let mes of messageArr) {
    if (mes.length > longestWord.length) {
        longestWord = mes;
    }
}


console.log(longestWord); // 'force'
