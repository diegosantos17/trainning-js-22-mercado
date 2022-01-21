const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://admin:admin@cluster0.jaxc2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

const services = {};

services.produtosService = require("./produtosService");

module.exports = services;