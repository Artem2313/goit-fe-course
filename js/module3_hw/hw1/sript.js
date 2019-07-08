/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/
// const checkNumberType = function(value) {
// 	if (value % 2 === 0)
// 		return 'Even';
// 	else
// 		return 'Odd';
// }
// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'







// --------------------------------------------------------------------------
/*
  Напиши функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/
// const formatString = function(str) {
//     if (str.length > 40) {
//         return str.split('').slice(0,39).join('') + '...';
//     } else {
//         return str;
//     }
// };
// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка
  
//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка







// --------------------------------------------------------------------------

/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
// const checkForSpam = function(str) {
//     if (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
//         return true;
//     } else {
//         return false;
//     }
// };
// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


// -----------------------------------------------------------------------------------------


// /*  
//   Написать функцию, getPx(str) 

//   Функция getPx должна получать строку вида '10px',
//   проверять была ли передана строка, если да, 
//   возвращать только числовую составляющую, к примеру 10.
    
//   Если была передана не строка, функция возвращает null.
// */
// const getPx = function(str) {
//     if (typeof(str) === 'string') {
//      return Number.parseFloat(str);   
//     } else {
//         return null;
//     }
// };
// // Вызовы функции для проверки
// console.log( getPx("10px") === 10); // true
// console.log( getPx("10.5") === 10.5); // true
// console.log( getPx("0") === 0); // true
// console.log( getPx(-1) ); // null
// console.log( getPx(10) ); // null


// -----------------------------------------------------------------------------------------

/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/

// const findLongestWord = function(str) {
//     let strSplit = str.split(' ');
//     let longestWord = 0;
//     let word = null;
//     for(let i = 0; i < strSplit.length; i += 1){
//     if(strSplit[i].length > longestWord){
//     longestWord = strSplit[i].length;
//     word = strSplit[i];
//     }
//   }
//   return word;    
// }

// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // 'force'

// -----------------------------------------------------------------------------------------

/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// const findLargestNumber = function(numbers) {
//     let largestNumber = 0;
//     for (i = 0; i <= largestNumber; i += 1){
//         if (numbers[i] > largestNumber) {
//             largestNumber = numbers[i];
//         }
//     }
//     return largestNumber;
// }
// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // 3
  
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // 27
  
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ) // 128

// -----------------------------------------------------------------------------------------


/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
//   и добавляет в массив uniqueNumbers только уникальные,
//   а те которые в массиве уже есть игнорирует.
// */

// const uniqueNumbers  = [2, 1, 4, 9];

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]


// ///////////////////////////////////////////////////////////////////////////////////////////

// // const obj = {

// // }


// // ////////////////////////////////////////

// // const isLoginValid = function (login) {
// //   return login.length > 4 && login.length < 16
// // };

// // console.log(isLoginValid('Mango'))

// /////////////////////////////////////////////////

// // console.log(logins.includes('Mango'));

// /////////////////////////////////////////////

// // const Shop = {
// //   name: 'Zina',
// //   count: 0,
// //   arr: [],
// //   sale(products) {
// //     this.count +=1
// //     console.log(`shop assistant : ${this.name} sold : ${products}, total : ${this.count}`);
// //     this.arr.push(products);
// //   },

// // };

// // Shop.sale('TV');
// // Shop.sale('Phone');
// // Shop.sale('Apple');
// // Shop.sale('Pen');

// // console.log(Shop);

// // console.log(Shop.arr);

// const SHOP = function (name) {
//   this.name = name;
//   this.counter = 0;
//   this.salary = 0;
//   this.arr = [];


//   this.showName = function() {
//     console.log(this.name, this.counter)
//   }

//   this.sale = function (products) {
//     this.counter += 1;
//     this.salary += 10;
//     console.log (`${this.name} sold ${this.counter} unit and got ${this.salary} for products ${this.products}`);
//     this.arr.push(products);
//   }

// }



// const Zina = new SHOP('Zina');

// Zina.showName()

// Zina.sale('Tv');


// for (lety i = 0; i < names.length)

// const Galina = new SHOP('Galina');

// Galina.showName()

// const add = (callback) => {
//   callback('message')
// }

// add((msg) => {
//   console.log(msg);
// })




const SHOP = function (name) {
  this.price = {
    Tv : 300,
    Phone : 1000,
    PS4 : 10000,
    beer : 33,
    pringles : 68,
  };
  this.name = name;
  this.count = 0;
  this.salary = 0;
  this.total = 0;
  this.bonus = 0;
  this.arr = [];

  this.showName = function() {
    return this.name
  }

  this.savePrice = function(price) {
    return this.price.push(price)
  }

  this.sale = function(products) {
    this.count += 1;
    const result = `${this.name} sold ${products} in total ${this.count}`
    this.arr.push(products)
    return result;
  }

  this.summ = function () {
    for(let key in this.price) {
      // console.log(this.price[key]);
      // console.log(this.arr.includes(key));
      if(this.arr.includes(key)) {
        this.total += this.price[key]
      } else {
        console.error('no product found!')
      }
    }
    return this.total
  }
}

const Ben = new SHOP('Ben')

const result = Ben.sale('Tv');
const result2 = Ben.sale('beer');
const result3 = Ben.sale('pringles');

console.log(result);

console.log(Ben.arr);

console.log(Ben.summ());














console.log(Ben.showName())
console.log(Ben.price);
