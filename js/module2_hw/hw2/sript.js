// let counter = 0;
// let arr = [];
// do {
// const user = Number(prompt('enter numbers'));
// counter += 1;
// console.log(counter);
// console.log(user);
// arr.push(user);
// } while (counter <= 3);

// console.log(arr);

// let numbers;

// while(true) {

//     numbers = prompt('enter numbers 0  --- 5');

//     if(numbers === null) {        
//         break;
//     }

//     numbers = Number(numbers);

//     if( numbers >= 1 && numbers <= 5) {
//         break;
//     }

//     if (numbers > 5) {
//         alert('enter another number');
//     }


// }


// switch(numbers) {
//     case 1:
//         console.log('one');
//         break;
//         case 2:
//         console.log('two');
//         break;
//         case 3:
//         console.log('three');
//         break;
//         case 4:
//         console.log('four');
//         break;
// }
// console.log(numbers);

// let num = 10;

// for(let i = 0; i < num; i++) {
//     console.log(i);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// console.log(clients);

// for(let i = 0; i < clients.length; i++) {
//     if(clients[i] === "Ajax"); {
//         console.log(clients[i]);
//         console.log('Is this your word?')
//         break;
//     }
// }

// const arr = "lorem ipsum dolorem quadro il patio";

// const newArr = arr.split(' ')
// console.log(newArr.length);

// for(let i = 0; i < newArr.length; i++) {
//     if(newArr[i] === 'dolorem'); {
//         console.log(newArr[i]);
//         console.log('Is this your word?')
//         break;
//     }
// }

// for (let key of newArr) {
//     if (key === 'patio') {
//         console.log('Is this your word?');
//         break;
//     }
// }

// const word = prompt('word');

// const reverseWord = word.split('').reverse().join('');

// console.log(word === reverseWord);

// const word = prompt('New word');

// word.split('');

// console.log(word[0].toUpperCase() + word.slice(1))


// const arr = [1,2,3,4,6,7,8,9];

// let count = 0;
// let total;

// for (let key of arr) {
//     total = count += key;
// }

// console.log(total);

const hasNumbers = Number(prompt('enter numbers'));

let counter = 0;

let num;

const arr = [];
do {
    num = Number(prompt(hasNumbers, ' numbers!!!!!'))
counter +=1
arr.push(num);
} while(counter < hasNumbers)

console.log(arr);