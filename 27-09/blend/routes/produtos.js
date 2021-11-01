const express = require('express');
const router = express.Router();
let auth = require('../middlewares/auth');

const ProdutoController = require('../controllers/ProdutoController');


router.get('/criar', ProdutoController.viewForm);
router.post('/criar', ProdutoController.salvarForm);
router.get('/sucesso', ProdutoController.sucesso);
router.get('/:id/editar', ProdutoController.viewAttForm);
router.put('/editar', ProdutoController.editar);
router.get('/', auth, ProdutoController.listarProdutos);
router.delete('/deletar/:id', ProdutoController.deletarProduto);

module.exports = router;
