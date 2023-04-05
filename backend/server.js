// function libraries
const express = require('express');
const cors = require('cors');

// import mongoose to connect it to MongoDB
const mongoose = require('mongoose');

require('dotenv').config();

// app will be our reference to express functions/libraries
const app = express();

// port is how we define where our backend is
const port = process.env.PORT || 3000;

// call these two functions
app.use(cors());
app.use(express.json());


// call the Atlas connect command
const uri = process.env.ATLAS_URI;

// connect using the command
mongoose.connect(uri, {useNewUrlParser: true});

// define the connection
const connection = mongoose.connection;

// once connected, console.log that it's connected
connection.once('open', () =>
{
    console.log("MongoDB database connection successfully established");
})


// call the file for userRouter
const userRouter = require('./routes/users');

// include the /users as the url to access the function
app.use('/users', userRouter);


// if successful, it will output: SERVER IS HERE!
app.listen(port, () =>
{
    console.log(`server is running on port ${port}`);
})