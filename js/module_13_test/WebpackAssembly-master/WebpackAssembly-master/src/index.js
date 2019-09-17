// const postToAdd = {
//     userId: 222,
//     title: 'My title',
//     body: 'My body',
// };

// const url = 'https://jsonplaceholder.typicode.com/posts';

// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(postToAdd)
// };



// fetch(url, options)
// .then(response => {
    

//     if(response.ok) {
//         return response.json();
//     }

//     throw new Error('Error while fetching data:' + response.statusText);
// })
// .then(savedPost => {
//     console.log(savedPost)
// })
// .catch(error => console.log(error));

// -------darksky

/*
const endpoint = "https://pixabay.com/api/?";
const key = "key=13615296-278f316d67a099253ce22c61a";
const props = `&q=${searchQuery}`;
const apiUrk = endpoint + key + props + query;
*/

const getImages = query => {
    return fetch()
}