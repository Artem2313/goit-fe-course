// console.log(JSON);

// const users = [
//     {
//         id: 1, name: 'Poly', active: true,
//     },
//     {
//         id: 2, name: 'Mango', active: false,
//     }
// ];

// const string = JSON.stringify(users);

// console.log(string);

// const array = JSON.parse(string);

// console.log(array);

// localStorage.setItem('users', JSON.stringify(users));

// const name = localStorage.getItem('name');
// console.log(name);

// const myusersjson = localStorage.getItem('users');

// const myusers = JSON.parse(myusersjson);

// console.log(myusers);

// ---------------------------

// import storage from './storage';

// const form = document.querySelector('.post-form');
// const [input, textarea] = form.elements;

// const postMessage = localStorage.getItem('feedback-post');

// if(postMessage) {
//     textarea.value = postMessage;
// }

// console.log(postMessage);

// console.log(textarea);

// form.addEventListener('keyup', e => {
//     console.log(textarea.value);

//     localStorage.setItem('feedback-post', textarea.value);
// });

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     localStorage.removeItem('feedback-post');

//     e.currentTarget.reset();
// });

// let count = 1;
// const max = 7;

// const timerId = setInterval(() => {
// if (count >= max) {
//     clearInterval(timerId);
//     return;
// }
// console.log(`Hello ` + count);
// count += 1;
// }, 500);

// --------------------------


// const ms = Date.now();

// console.log(ms);

// const date = new Date (1567611342558);

// console.log(Date);

// ----------------------------


const refs = {
    clockface:  document.querySelector('.timer h1'),
    startBtn:  document.querySelector('button[data-action="start"]'),
    stopBtn:  document.querySelector('button[data-action="stop"]'),
};

const formatTime = time => {
    const date = new Date (time);

    const ms = String(date.getMilliseconds()).slice(0, 1);
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();

    return `${minutes}:${seconds}.${ms}`;
};


const timer = {
    id: null,
    startTime: null,
    active: false,    
    start() {
        if(this.active) {
            return;
        }

        this.active = true;
        this.startTime = Date.now();

        this.id = setInterval(() => {
            const currentTime = Date.now();

            const deltaTime = currentTime - this.startTime;
            const formattedTime = formatTime(deltaTime);
            console.log(formattedTime);
            refs.clockface.textContent = formattedTime;
        }, 1000);   
        
    },
    stop() {
        clearInterval(this.id);
        this.active = false;
    }
    
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));



