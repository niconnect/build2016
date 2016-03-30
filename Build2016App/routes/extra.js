var express = require('express');
var router = express.Router();

var config = require('config');

/* GET extra listing. */
router.get('/', function(req, res, next) {
  res.render('extra', { title: 'キャンペーン応募', prefectures: config.prefectures });
});

router.post('/', function (req, res, next) {
  var request = require('request');
  
  var options = {
      uri: config.endpoint + "/api/extra",
      form: {
          TwitterId: req.body.twitterId,
          Prefecture: req.body.prefecture,
          Message: req.body.message
      }
  };
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('complete', { title: 'キャンペーン応募完了' });
    } else {
      res.render('error', { message: 'キャンペーンの応募に失敗しました' });
    }
  });
});

module.exports = router;
