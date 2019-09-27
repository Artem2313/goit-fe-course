// function* myGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const gen = myGenerator();

// console.log(gen.next());

// for (const value of gen) {
//     console.log(value);
// }

// const myGenerator = function*(max) {
//     for (let i = 0; i < max; i += 1) {
//       yield i;
//     }
//   };

//   const generator = myGenerator(5);

//   console.log(generator.next());  
//   console.log(generator.next());  
//   console.log(generator.next());  

// /////////

const questionGenerator = function* () {
    const answer = yield 'How much is 5 + 5?';

    if (answer === 10) {
        console.log('right!');
    } else {
        const isSure = yield 'Are you sure?';

        if (isSure === 'yes') {
            console.log('ok!');
        } else {
            console.log('try again!');
        };
    };
};

const question = questionGenerator();

console.log(question.next());
console.log(question.next(20));
console.log(question.next('yes'));