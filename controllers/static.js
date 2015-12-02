var express = require('express');
var router = express.Router();
var path = require('path');
// 
router.use(express.static(__dirname + '/../assets'))
router.use('/templates', express.static(__dirname + '/../templates'))
router.use('/public', express.static(path.join(__dirname, '/../public')));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('pages/index', { title: 'ngTodo App' });
});

router.get('/about', function(req, res) {
  res.render('pages/about', { title: 'ngTodo App' });
});


module.exports = router;