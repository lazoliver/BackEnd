var express = require('express');
var app = express();
require('dotenv').config();

// Definindo a porta do servidor
const port = 5000;

// Aula 7 - Middleware registrando (método, caminho e ip)
app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});

// Aula 1 - Console Node.Js
console.log('Hello World');

/* 
Aula 2 - Respondendo String
app.get("/", (req, res) => {
    res.send('Hello Express');
});
*/

// Aula 3 - Caminho para arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Aula 4 - Middleware para arquivos estáticos
app.use('/public', express.static(__dirname + '/public'));

// Aula 5 - Respondendo JSON
/* 
app.get('/json', (req, res) => {
    res.json({
      "message": "Hello json"
    });
});
*/

// Aula 6 - Usar .env
app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.json("hello json".toLocaleUpperCase());
    } else {
        res.json({"message": "Hello json"});
    }
});

app.listen(port, (req, res) => {
    console.log(`Servidor escutando a porta ${port}`);
});