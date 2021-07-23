var express = require('express');
var router = express.Router();

/* GET home page. */
// yes we have a LFI here
router.get('/', function(req, res, next) {
    res.sendFile(req.query.file);
});

module.exports = router;

