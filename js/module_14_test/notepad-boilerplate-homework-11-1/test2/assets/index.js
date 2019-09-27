import axios from 'axios';

// const getTodo = id => {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => response.json());    
// };

// getTodo(1).then(json => console.log(json));



// const response = axios.get('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.data)
// .then(data => console.log(data));


// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
// const getTodo = async id => {   
    
//     try {
//     const response = await  axios.get(`todos/${id}`);
    
       

//     return response.data;
// } catch(error) {
//         throw error;
//     }
// };

// const updateTodoUI = async () => {
//     try 
//     {
//         const todo = await getTodo(1);
//         console.log(todo);
//     } catch(error) {

//     }

// };

// updateTodoUI();

// getTodo(1)
// .then(console.log)
// .catch(console.log);


////////////
// const getUserFriends = () => {
// fetch('/user-profile')
//   .then(user => fetch(`/users/${user.id}/friends`))
//   .then(idList => {
//     const friends = idList.map(id => fetch(`/users/${id}`));
//     return Promise.all(friends);
//   })
//   .then(friends => console.log(friends))
//   .catch(error => console.error(error));
// };

// const getUserFriendsAsync = async () => {
//     try {
//     const user = await fetch('/user-profile');
//     const idList = await fetch(`/users/${user.id}/friends`);

//     const friendsP = idList.map(id => fetch(`/users/${id}`));

//     const friends = await Promise.all(friendsP);
//     return friends;
//     } catch(error) {
//         throw error;
//     }    
// };

// getUserFriendsAsync().then(friends => console.log(friends));

