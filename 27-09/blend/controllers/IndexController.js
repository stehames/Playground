let IndexController = {
    viewContato : (req, res)=>{
        let{nome,idade} = req.query; 
        res.render('contato', {nomeUsuario:nome});
    },
    confirmarContato:(req, res)=>{
      let {nome, email} = req.query;
      res.send('recebido com sucesso '+nome);
    }
}

module.exports = IndexController;