const express = require('express');

let app = express();

app.get('/',(req, res)=>res.send("Olá mundo!"));
app.get('/contatos', (req, res)=>res.send("Página contatos"));
app.get('/produtos/:id?', (req, res)=>{
    let {id} = req.params;
    res.send("Eu tenho um produto com o id: "+id);
});


//criando um Servidor
app.listen(3000,()=>console.log("Servidor rodando na porta 3000"))