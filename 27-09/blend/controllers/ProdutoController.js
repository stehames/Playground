let ProdutoController = {
    viewForm: (req, res) => {
        return res.render('produto');
    },
    salvarForm: (req, res) => {
        let {nomeProduto, precoProduto} = req.body;
        res.redirect('/produtos/sucesso');
    },
    sucesso: (req,res) =>{
        res.render('sucesso');
    },
    viewAttForm: (req, res)=>{
        let {id} = req.params;
        let produtos = [
            {id:1, nome: "Produto x", preco:10},
            {id:2, nome: "Produto y", preco:20}
        ]
       res.render('editarProduto', {produto: produtos[id]});
    },
    editar: (req, res) => {
        let{ nomeProduto, precoProduto} = req.body;
        res.send("Voce editou o produto "+nomeProduto);
    },
    listarProdutos: (req, res)=>{
        let produtos = [
            {id:1, nome: "Produto x", preco:10},
            {id:2, nome: "Produto y", preco:20}
        ]
        res.render('listaProdutos', {listaProdutos:produtos})
    },
    deletarProduto: (req, res)=>{
        let {id} = req.params
        res.send("Estou deletando o produto com o id "+id)
    }
}

module.exports = ProdutoController;