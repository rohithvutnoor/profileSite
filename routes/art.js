/**
 * Created by rohithvutnoor on 26-Aug-17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('art', { title: '' });
});

module.exports = router;