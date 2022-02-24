var express = require('express');
var app = express();

// Definindo a porta do servidor
const port = 5000;

// Aula 1 - Console Node.Js
console.log('Hello World');

// Aula 2 - Respondendo String
app.get("/", (req, res) => {
    res.send('Hello Express');
});

app.listen(port, (req, res) => {
    console.log(`Servidor escutando a porta ${port}`);
});