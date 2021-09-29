const express = require('express');
const { deletarProduto } = require('../controllers/ProdutoController');

const ProdutoController = require('../controllers/ProdutoController');

const router = express.Router();

router.get('/criar', ProdutoController.criarProduto);
router.get('/deletar/:id', ProdutoController.deletarProduto);

module.exports = router;