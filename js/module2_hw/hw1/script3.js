// const arr = [1, 3, 5, 7, 9];
// const min = arr[0];
// const max = arr[arr.length - 1];
// const input = prompt(`Give me a number from ${min} to ${max}`);
// const value = Number(input);
// const isInArrey = arr.includes(value);

// if (isInArrey) {
//     alert('Got it right!');
// } else {
//     alert('wrong number!');
// }

// let a = 5;
// let b = a;

// let counter = 0;

// while (counter < 10) {
//     console.log('counter: ', counter);

//     counter += 1;
// }

// const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];

// let i = 0;

// const max = names.length;

// while (i < max) {

// }

// const values = [];

// const max = 5;
// let counter = 0;

// while (counter < max) {
//     let input = prompt('Enter something');
//     values.push(input);
//     counter += 1;
// }

// console.log(values);

// let userInput;
// const arr = [];

// do {
//     userInput = prompt('Input a number from 1 to 5');

//     userInput = Number(userInput);

//     console.log(userInput);

//     arr.push(userInput);
//     console.log(arr);
// } while (userInput < 1 || userInput > 5);

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }
// перебирать массив
// const numbers = [98, 4, 6, 1, 5, 72, 2, 9];

// let smallestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//     const currentNumber = numbers[i];

//     console.log('i: ', i);
//     console.log('currentNumber: ', currentNumber);
//     console.log('smallestNumber: ', smallestNumber);

//     if(currentNumber < smallestNumber) {
//         smallestNumber = currentNumber;
//     }
// }

// console.log('smallestNumber: ', smallestNumber);

// const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];

// for (const name of names) {
//     console.log(name);
// }

// const numbers = [98, 4, 6, 1, 5, 72, 2, 9];

// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log(smallestNumber);

// const numbers = [98, 4, 6, 1, 5, 72, 2, 9];
// const evenNumbers = [];
// EVEN NUMBERS

// for( let i = 0, max = numbers.length; i < max; i += 1) {
//     const currentNumber = numbers[i];

//     if(currentNumber % 2 === 0) {
//         evenNumbers.push(currentNumber);
//     }
// }

// console.log(numbers);
// console.log(evenNumbers);

// const numbers = [98, 4, 6, 1, 5, 72, 2, 9];
// const evenNumbers = [];

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         evenNumbers.push(number);
//     }
// }

// console.log(numbers);
// console.log(evenNumbers);

// const numbers = [1, 2, 3, 4, 5];

// for(let i = 0; i < numbers.length; i += 1) {
//     numbers[i] = numbers[i] * 2;
// }

// console.log(numbers);

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let resultMsg = '';

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         resultMsg = 'Found';
//         break;
//     } else {
//         resultMsg = 'Not found';
//     }
// }

// console.log(resultMsg);

// endless cycle

// let userInput;

// while (true) {
//     userInput = prompt('Выберите вариант доставки: 1 - самовывоз, 2 - курьер, 3 - почта');
//     if (userInput === null) break;

//     userInput = Number(userInput);

//     if (userInput >= 1 && userInput <= 3) break;
// }

// switch (userInput) {
//     case 1:
//         console.log('dabao');
//         break;
//     case 2:
//         console.log('kuaidi');
//         break;
//     case 3:
//         console.log('yundao');
//         break;
//     default:
//         console.log('cancel');
// }

