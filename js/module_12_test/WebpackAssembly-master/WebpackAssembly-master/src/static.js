import { resolve } from "path";

const goRace = (name, delay = 0) => {
    return new Promise (resolve => {
    setTimeout(() => {
       resolve(`Car ${name} finished in ${delay}ms`); 
    }, delay);
    });
};

const carA = goRace('car-1', 500);
const carB = goRace('car-B', 300);

// carA.then(console.log);
// carB.then(console.log);

Promise.race([carA, carB]).then(winner => console.log(winner));

Promise.all([carA, carB]).then((results => {
    console.log(results);
}));