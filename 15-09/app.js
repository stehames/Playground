const express = require('express');
const rotasProdutos = require('./rotas/rotasProduto');
let app = express();

app.get('/',(req, res)=>res.send("Olá mundo!"));
app.get('/contatos', (req, res)=>res.send("Página contatos"));
app.use('/produtos', rotasProdutos);


//criando um Servidor
app.listen(3000,()=>console.log("Servidor rodando na porta 3000"))