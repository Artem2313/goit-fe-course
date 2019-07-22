


// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, online: false},
//     {id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true},
//    ];




// const totalTimePlayed = players.reduce((totalHours, player) => {
//     return totalHours + player.timePlayed;
// }, 0);

// console.log(totalTimePlayed);

// function reduce (callback, acc) {
//     let accumulator = acc;

//     for(let i = 0; i < Array.length; i += 1) {
//         callback(accumulator, arr[i]);
//     }
// }




   // const numbers = [1, 2, 3, 4, 5];

// // const sum = numbers.reduce((accumulator, number) => {
// //     accumulator += number;

// //     return accumulator;
// // }, 0);

// const sum = numbers.reduce((total, number) => total + number, 0);

// console.log(sum);


// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
//   ];

//   const allTags = tweets.reduce((acc, tweet) => {
//       acc.push(...tweet.tags)

//       return acc;

//     // return [...acc, ...tweet.tags];
//   }, []);

//   console.table(allTags);

//   const logger = obj => {
//     console.group('keys');
//     Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`));
//     console.groupEnd('keys');  
//   }

//   const tagStats = allTags.reduce((acc, tag) => {
//     logger(acc);
    
    
//     if(acc.hasOwnProperty(tag)) {
//         acc[tag] += 1;

//         return acc;
//     }

//     acc[tag] = 1;

//     return acc;
//   }, {});

//   console.log(tagStats);


// sort

// const numbers = [1, 9, 6, 2, 3];

// numbers.sort();

// console.log(numbers);

// const letters = ['b', 'B', 'a', 'A'];

// letters.sort();

// console.log(letters);



// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, online: false},
//     {id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true},
//    ];

//    players.sort((playerA, playerB) => {
//        return playerA.timePlayed - playerB.timePlayed;
//    });

//    console.table(players);

