# Back-End - FreeCodeCamp

---

Este é um projeto voltado ao aprendizado do back-end em Node.Js, sendo assim, vamos as aulas.

### Aula 1 - Console.log

​	Para exibir uma mensagem no console do node: `console.log('Hello World')`;

### Aula 2 - Respondendo String

​	Responder String para caminho específico: 

```javascript
// Aula 2 - Respondendo String
app.get("/", (req, res) => {
    res.send('Hello Express');
});
```

### Bonus - Listen

​	Servidor escutando as requisições:

```javascript
// Definindo a porta do servidor
const port = 5000;

app.listen(port, (req, res) => {
    console.log(`Servidor escutando a porta ${port}`);
});
```

### Aula 3 - Caminho para arquivo HTML

​	Vamos utilizar o sendFile para direcionar as requisiçoes a API para um arquivo, neste caso extensão HTML:

```javascript
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
```

### Aula 4 - Middleware para arquivos estáticos

​	Chegou a vez de criarmos um middleware para servir recurso para nosso html:

```javascript
app.use('/public', express.static(__dirname + '/public'));
```

