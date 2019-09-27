// import './sass/main.scss';


// function createIterator(numbers) {
//     let counter = 0;

//     return {
//         next() {
//             return {
//                 done: counter >= numbers.length,
//                 value: counter < numbers.length ? numbers[counter++] : undefined,
//             }
//         }

//     }
// }

// const iterator = createIterator([1,2,3,4,5]);

// *********************************************************

// const calendar = {
//     dates: [1,2,3,4,5],
//     [Symbol.iterator]() {
//         let counter = 0;
//         const max = this.dates.length;
//         const dates = this.dates;
//         return {
//             next(){
//                 return {
//                     done: counter >= max,
//                     value: counter < max ? dates[counter++] : undefined,
//                 }
//             }           
//         }
//     }
// };

// console.log(...calendar);

// for (const date of calendar) {
//     console.log(date);
// }

// ////////////

// Number.prototype[Symbol.iterator] = function() {
//     console.log(this)
//     return{
//         next() {
//             // return{

//             // }
//         }
//     }
// }
// const numbers = [...100];
// console.log(numbers);

//////////////

const myGenerator = function*() {
    yield 1;
    yield 2;
    yield 3;
};

console.log(myGenerator.next());