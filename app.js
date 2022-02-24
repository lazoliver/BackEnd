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

// Aula 3 - Caminho para arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


// Aula 4 - Middleware para arquivos estáticos
app.use('/public', express.static(__dirname + '/public'));

app.listen(port, (req, res) => {
    console.log(`Servidor escutando a porta ${port}`);
});