const express = require('express');
const router = express.Router();
const Usuario = require('../model/usuario')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
})

router.post('/login', function (req, res, next) {
  let login = req.body.login
  let senha = req.body.senha

  Usuario.find({
    login: login,
    senha: senha
  }).exec()
    .then(usuarios => {
      if (usuarios.length)
        res.status(204).end()
      else
        res.status(401).end()
    }).catch(err => {
      next({ message: err.message })
    })
})

module.exports = router;
