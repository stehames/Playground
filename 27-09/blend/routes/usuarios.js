var express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const usuarioController = require('../controllers/UsuarioController')
const logDBMiddleware = require('../middlewares/logDB');
const {check, validationResult, body} = require('express-validator')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({storage: storage})



/* GET users listing. */
router.get('/criar', usuarioController.registroForm);
router.post('/criar', upload.any(), logDBMiddleware, [
  check('nome').isLength({min:3}).withMessage("O nome do usuário tem que contem no mínimo 3 caracteres"),
  check('email').isEmail().withMessage("Digite um email válido"),
  check('senha').isLength({min:6}).withMessage("A senha deve conter no minimo 6 caracteres"),
  body('email').custom((email)=>{
    let usuario = JSON.parse(fs.readFileSync('usuarios.json'))
    return usuario.email != email
  }).withMessage("Usuario já existe")
], usuarioController.salvarForm);

router.get('/login', usuarioController.loginForm);
router.post('/login', usuarioController.logarUsuario);

module.exports = router;
