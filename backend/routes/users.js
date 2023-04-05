// import express and the user model schema
const router = require('express').Router();
let User = require('../models/users.model.js');

// function: get all the users in an array
router.route('/').get((req, res) => {

    // call the find command from mongoose
    User.find()
    .then(users => res.json(users)) // output the json
    .catch(err => res.status(400).json('Error: +' + err)); // if there's an error, output it
});

// function: add a user (C)
router.route('/add').post((req, res) => {

    //get the username, password, firstname and lastname from the input response
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    // create a new user with it
    const newUser = newUser({username, password, firstName, lastName})

    // save the entry into the database
    newUser.save()
    .then(() => res.jsono("USER ADDED")) // output if added successfully
    .catch(err => res.status(400).json('Error: +' + err)); // error output if failed
});

//export it to the router
module.exports = router;