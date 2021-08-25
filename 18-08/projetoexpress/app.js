const express = require('express');

let app = express();

app.get('/', (req, res) => res.send("ola mundo"));
app.get('/contatos', (req, res) => res.send({nome: "stephanie", idade: 27}));
//criando um servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));