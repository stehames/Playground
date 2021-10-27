const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");

let usuarioJson = path.join("usuarios.json");
let UsuarioController = {
  registroForm: (req, res) => {
    res.render("registroUsuario");
  },
  salvarForm: (req, res) => {
    let listaDeErrors = validationResult(req);
    if (listaDeErrors.isEmpty()) {
      let { nome, email, senha } = req.body;
      let { files } = req;
      let senhaC = bcrypt.hashSync(senha, 10);
      let usuario = JSON.stringify({
        nome,
        email,
        senha: senhaC,
        avatar: files[0].originalname,
      });
      fs.writeFileSync(usuarioJson, usuario);
      return res.send("Usuário cadastrado com sucesso");
    }else{
        return res.render('registroUsuario', {errors: listaDeErrors.errors})
    }

  },
  loginForm: (req, res) => {
    res.render("login");
  },
  logarUsuario: (req, res) => {
    let { email, senha } = req.body;
    let usuarioSalvo = fs.readFileSync(usuarioJson, { encoding: "utf-8" });
    usuarioSalvo = JSON.parse(usuarioSalvo);
  },
};
module.exports = UsuarioController;
