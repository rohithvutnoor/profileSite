/**
 * Created by rohithvutnoor on 31-Jul-17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('redirect', { title: '' });
});

module.exports = router;
