/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const message = "May the force be with you";
let longestWord = "";




for (const val of message.split(' ')) {
    if (val.length > longestWord.length) {
        longestWord = val;
    }
    
}

console.log(longestWord); // 'force'