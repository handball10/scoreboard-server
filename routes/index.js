var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('/index');
});

router.get('/scoreboard', function(req, res, next) {
  res.render('/index');
});

module.exports = router;
