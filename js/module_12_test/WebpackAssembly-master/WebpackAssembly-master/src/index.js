import { promised } from "q";

// const getUserLocation = (onSuccess, onError) => {

//   setTimeout(() => {
//     let failed = Math.random() > 0.5;

//     failed ? onError(`Error while getting location`) : onSuccess('Ukraine');

//   }, 500);  
// };

// const showUserLocationSuccess = location => {
//   console.log(`Location: ${location}`);
// };

// const showUserLocationError = error => {
//   console.log(error);
// };

// getUserLocation(showUserLocationSuccess, showUserLocationError);

// if(location) {
//   console.log(`Location: ${location}`);
// } else {
//   console.log(`Error while getting location`);
// }

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let failed = Math.random() > 0.5;

//         failed ? reject(`Error while getting location`) : resolve('Ukraine');

//     }, 500);
// });

// const onResolve = result => {
//     console.log(result);
// };

// const onReject = error => {
//     console.log(error);
// };

// // promise.then(result => {
// //     console.log(result)
// // });


// promise.then(onResolve, onReject);




// const getUserLocation = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let failed = Math.random() > 0.5;
        
//             failed ? reject(`Error while getting location`) : resolve('Ukraine');
        
//           }, 500);  
//     })  
    
// };

// getUserLocation()
// .then(
//     location => {
//         console.log(`Location: ${location}`);
//       }
//       )
// .catch(error => {
//     console.log(error);
//   });

const todos = {
    items: ['item-1', 'item-2'],
    add(item) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.items.push(item);  
                resolve(item);
            }, 300);
        });   

        
    },
    delete(item) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.items = this.items.filter(i => item !== i);  
                resolve(this.items);
            }, 500);
        }); 
        
    }
};

const updatedUI = data => console.log(data);

todos.add('item-3').then(addedItem => updatedUI(addedItem));
todos.delete('item-2').then(items => updatedUI(items));


// const foo = () => {
//     // return new Promise((resolve,reject) => {
//     //     resolve(5);
//     // });

//     return Promise.resolve(5);
// };

// foo().then(console.log);

// console.log(1);

// setTimeout(() => {
//    console.log(2); 
// }, 0);

// Promise.resolve(3).then(console.log);

// console.log(4);