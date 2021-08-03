var express = require('express');
var router = express.Router();

/* GET home page. */
// yes we have a LFI here
router.get('/', function(req, res, next) {
    const path = Buffer.from(req.query.file, 'base64').toString('utf8');
    res.sendFile(path);
});

module.exports = router;

