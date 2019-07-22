// const filter = (arr, testFn) => {
//     const newArr = [];

//     for (let i = 0; i < arr.length; i += 1) {
//         const passed = testFn(arr[i]);

//         if (passed) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// };

// const numbers = [1, 2, 3, 4, 5];

// const filteredNumbers = filter(numbers, number => number >= 3);

// console.log(filteredNumbers);

// console.log(numbers.filter(number => number >= 3));



const players = [
 {id: 'player-1', name: 'Mango', timePlayed: 310, online: false},
 {id: 'player-2', name: 'Poly', timePlayed: 470, online: true},
 {id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true},
 {id: 'player-4', name: 'Ajax', timePlayed: 150, online: false},
 {id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true},
];

// method forEach

// players.forEach((player, index) => {
//     console.log(index, player)
// });


// method map

// const playerId = 'player-3';

// const getPlayerNames = (allPlayers) => allPlayers.map(player => player.name);

// const playerNames = getPlayerNames(players);

// console.log(playerNames);
// spread 

// const updatedPlayers = players.map(player => {
//     if(player.id === playerId) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100
//         }
//     }
//     return player;
// })

// const updatePlayerById = (allPlayers, playerId, hours) => {
//     return allPlayers.map(player => {
//         if(player.id === playerId) {
//             return {
//                 ...player,
//                 timePlayed: player.timePlayed + hours,
//             }
//         }
//         return player;
//     })
// };

// const updatedPlayers = updatePlayerById(players, 'player-2', 200)

// console.table(updatedPlayers);


// const updatedPlayers = players.map(player => {
//     player.id === playerId ?
//         {
//             ...player,
//             timePlayed: player.timePlayed + 100
//         }
//     :
//     player;
// })

// console.table(updatedPlayers);

// вытащить имя

// const playerNames = players.map(player => player.name);




// method filter


// const onlinePlayers = players.filter(player => player.online);

// const hardcorePlayers = players.filter(player => player.timePlayed >= 200);

// console.table(onlinePlayers);

// console.table(hardcorePlayers);




// method find

// const p = players.find(player => player.id === "player-4");
// console.log(p);

// const findPlayerById = (allPlayers, playerId) => 
//     allPlayers.find(player => player.id === playerId);

// const player = findPlayerById(players, 'player-1');

// console.log(player);


//  every and some

// let allOnline = true;

// players.forEach(player => {
//     if(!player.online) {
//         allOnline = false;
//     }
// });

// console.log(allOnline);


// const numbers = [1, 2, 3, 4, 5];

// const result1 = numbers.every(number => number >= 3);

// const result2 = numbers.some(number => number >= 3);

// console.log(result1);

// console.log(result2);

// const allOnline = players.every(player => player.online);

// console.log(allOnline);

// const anyOnline = players.some(player => player.online);

// console.log(anyOnline);



// Chaining


// const onlinePlayers = players.filter(player => player.online);

// console.table(onlinePlayers);

// const playerNames = onlinePlayers.map(player => player.name);

// console.table(playerNames);

// const onlinePlayersNames = players.filter(player => player.online).map(player => player.name);

// console.table(onlinePlayersNames);

// const numbers = [1, 2, 3, 4, 5];

// const greaterThanThree = numbers.filter(number => number > 3);
// console.table(greaterThanThree);

// const doubled = greaterThanThree.map(number => number *2);
// console.table(doubled);

// const doubled = numbers.filter(number => number > 3).map(number => number *2);

// console.table(doubled);

