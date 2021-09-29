const series = [
    {
      id: 1,
      nome: 'Irmão do Jorel'
    },
    {
      id: 2,
      nome: 'Um maluco no pedaço'
    }
  ]

const express = require('express');
const app = express();
app.get('/serie/:id', (req, res)=>{
    let {id} = req.params;
    res.send(series[id-1].nome);    
})
//criando um Servidor
app.listen(3000,()=>console.log("Servidor rodando na porta 3000"))