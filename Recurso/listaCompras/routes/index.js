var express = require('express');
var router = express.Router();
var Listas = require('../controllers/listas')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/api/listas', function (req, res) {
  Listas.listar()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({ error: e }))
});


router.get('/api/listas/:id', function(req, res) {
  Listas.consultar(req.params.id)
      .then(dados => res.status(200).jsonp(dados) )
      .catch(e => res.status(500).jsonp({error: e}))
});

module.exports = router;
