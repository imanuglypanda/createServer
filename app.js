require('dotenv').config();

// express app
const express = require('express');
const app = express();

// mongoose
const mongoose = require('mongoose');


const port = process.env.PORT || 3000;

// Connect to MongoDB
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI);
    

// listen for requrests
app.listen(dbURI, () => {
    console.log(`App listening at ${dbURI}`);
  });

app.get('/', (req, res) => {
    // res.send('<h1>Home page</h1>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('<h1>About page</h1>');
    res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/blogs/create', (req, res) => {
    res.sendFile('./views/create.html', { root: __dirname });
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});