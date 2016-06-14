var express = require('express');
var router = express.Router();
var Controller = require('../controllers/scrabble')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chart', Controller.getChart)

module.exports = router;
