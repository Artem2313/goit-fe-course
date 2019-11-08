const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Middlewares

// app.use('/posts', () => {
//     console.log('This is a middleware!')
// })


// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

//connect to DB

mongoose.connect(process.env.DB_CONNECTION,
 { useNewUrlParser: true },
 () => {
    console.log('connected to DB!')
})


// How to start listening the serves?

app.listen(3000);