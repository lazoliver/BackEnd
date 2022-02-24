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