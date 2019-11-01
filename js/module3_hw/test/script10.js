/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/

const findLongestWord = str => {
    let strArr = str.split(' ');
    let strLongest = strArr[0];
    for (let val of strArr) {
        if(val.length >= strLongest.length) {
            strLongest = val;  
        }
    }
    return strLongest;
}

// Вызовы функции для проверки
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
  ); // 'jumped'
  
  console.log(
    findLongestWord("Google do a roll")
  ); // 'Google'
  
  console.log(
    findLongestWord("May the force be with you")
  ); // 'force'
  
  
  
  