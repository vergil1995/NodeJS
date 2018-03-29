// bien router thanh global
global.router = require('express').Router();
var router = global.router;

// all ham deu dc anh xa vao router
router = require('./servant');
router = require('./category');

/* GET home page. */
router.get('/', function(req, res, next) {// index.ejs
  res.render('index', { title: 'Hello World' });
});

module.exports = router;
