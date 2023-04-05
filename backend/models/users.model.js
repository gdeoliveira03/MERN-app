// import MongoDB's functions
const mongoose = require('mongoose');

// call a new "schema" or format to put into the database
const Schema = mongoose.Schema;

// define the schema
const userSchema = new Schema({

    // entry 1: username
    username: {
        type: String, // username is a type String
        required: true, // this field is mandatory to put it into the database
        unique: true, // there can only be 1 entry with this EXACT string value
        trim: true, // no whitespace
        minlength: 3 // needs at least 3 characters
    },

    // entry 2: password
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    // entry 3: first name
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    // entry 4: last name
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
}, {

    // including timestamps also adds stuff to each entry like "time created" and "time updated"
    timestamps: true,
});

// create the user using the schema
const User = mongoose.model('User', userSchema);

// export the User model with the newly created variable
module.exports = User;