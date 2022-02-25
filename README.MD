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

### Aula 5 - Respondendo JSON

​	O próximo é responder um JSON: 

```javascript
app.get('/json', (req, res) => {
    res.json({
      "message": "Hello json"
    });
});
```

### Aula 6 - Usar .env

​	Vamos definir variáveis de ambiente para posteriormente utilizar: 

```javascript
app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.json("hello json".toLocaleUpperCase());
    } else {
        res.json({"message": "Hello json"});
    }
});
```

### Aula 7 - Middleware registrando (método, caminho e ip)

```javascript
app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});
```

### Aula 8 - Middleware com tempo do servidor

```javascript
app.get(
  '/now', 
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  }, 
  (req, res) => {
    res.send({
      time: req.time
    });  
  }
);
```

### Aula 9 - Consultando Cliente

```javascript
app.get('/name', (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;
    var { first: firstName, last: lastName } = req.query;
    res.json({
        name: `${firstName} ${lastName}`
    });
});
```

### Aula 10 - Body-Parser

```javascript
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

