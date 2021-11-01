function auth(req, res, next) {
    if(typeof(req.sesion.usuario) != "undefined"){
        return next();
    }else{
        return res.send("Você precisa estar logado para ter acesso");
    }
}

module.exports = auth;