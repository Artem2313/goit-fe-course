/*
* Есть два массива names и prices с именами и ценами товаров.
* Напишите функцию combine(names, prices), которая получает 
* эти два массива и возвращает массив объектов со свойствами name и price. 
*/


const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];

//Two arrays in one object {radar: 1000, Scaner: 2000}
// const combine = (names, prices) => {
// let obj = {};
// for ( i = 0; i < names.length; i++) {
//     obj[names[i]] = prices[i];
// }
// return obj;
// };

const combine = (names, prices) => {
    let arr = [];
    for(let i=0;i<names.length;i++){
        arr.push({name:names[i],price:prices[i]});
     }
     return arr;
}

const products = combine(names, prices);
console.log(products); // массив объектов со свойствами name и price