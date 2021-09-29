const ProdutoController={
    criarProduto: (req,res)=>{
        res.send("criando um produto");
    },
    deletarProduto: (req,res)=>{
        const {id} = rq.params;
        res.send("Deletando  o produto com id ",id);
    }
}

module.exports = ProdutoController;