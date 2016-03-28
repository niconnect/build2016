var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Build 2016 ライトチャレンジ' });
});

module.exports = router;
