var express = require('express');
var app = express();

// Aula 1 - Console Node.Js
console.log('Hello World');

// Aula 2 - Respondendo String
app.get("/", (req, res) => {
    res.send('Hello Express');
});