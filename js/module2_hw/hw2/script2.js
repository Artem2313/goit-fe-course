///////////////------------------- start --------------


// const hasPeoples =  prompt('enter')

// let password  = 'sddds'

// if(hasPeoples !== null) {
//     if(hasPeoples === 'sddds') {
//         console.log('ok')
//     }
// } else{
//     console.log('error')
// }

//----------------- arr ----------


// const arr = [1,2,3,4,5,6,7,8,9];


// arr[arr.length -1] = 'one'

// arr[1] = 121;

// console.log(arr)


// arr.length = 3;

// arr.length = 5


// console.log(arr)

// let a = ['hello'];

// let b = a;

// a.push('my friends')

// console.log(a)
// console.log(b)


// const word = 'Синтаксис прост любой атрибут чьё имя начинается'

// console.log(word)

// const clone = word.split(' ');

// console.log(clone.splice(2,4).join(' '))




// console.log(clone.indexOf('прот'))


// if(clone[0] === 'Синтакс' || clone[0] === 'Синтаксис') {
//     console.log('yes')
// } else {
//     console.error('no')
// }



// clone.push('fail', 'dsd', 'sdsd')

// clone.pop()
// clone.pop()
// clone.pop()


// clone.unshift('first')
// clone.shift()

// const newClone = clone.slice()

// const word = prompt('enter name')
// const arr = [];
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi']

// console.log('old arr', clients)




// console.log('arr', arr)

// if(word !== null) {
//     const dellete = clients.splice(clients.indexOf(word), 1)
//     const result = arr.push(dellete)
//     console.log('result',result)
//     if(result === 1) {
//         console.log('win')
//     }
    
// } else {
//     console.log('try !!!!!!!!!!!!')
// }
// console.log('new arr',clients)


//-------------------- concat -----------


// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi']


// const newArr = ['test', 'try']

// const result = newArr.concat(clients)

// const a = 123;

// console.log(Array.isArray(a))
// console.log(Array.isArray(result))


// let counter = 0;

// setInterval(function(){
//     counter += 1;
//     console.log(counter)
// },1000)

// let counter = 0;

// while(counter < 10) {
//     counter ++
//     console.log(counter)
// }

// const num = Number(prompt('enter count'))




let counter = 1;
const arr = [];
do {
    const hasPeoplesInfo = Number(prompt(counter));
    if(hasPeoplesInfo) {
        arr.push(hasPeoplesInfo);
    }
    counter ++
} while(counter <= 3)

console.log(arr)