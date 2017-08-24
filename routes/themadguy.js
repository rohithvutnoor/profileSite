/**
 * Created by rohithvutnoor on 31-Jul-17.
 */
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var path = require('path');
var dateFormat = require('dateformat');
var url = 'mongodb://rohithvutnoor:2XGOLbRKq9iY9wEnAj7dRW8ijV4xSf9EzyJvkDeW3HMyyHLSWpVs3OzS7EA4VYTpTmnERvGLTEBxDVp6rqOA3A==@rohithvutnoor.documents.azure.com:10255/?ssl=true&replicaSet=globaldb';
//'mongodb://rohithvutnoor:rohithvutnoor@ds034807.mlab.com:34807/profile';
var tot = [];
router.post('/comments', function(req, res, next) {
    var commentObject = {
        "username":"",
        "query":"",
        "time":""
    };
    var now = new Date();
    var date = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

    commentObject.username = req.body.username;
    commentObject.query = req.body.comment;
    commentObject.time = date;

    console.log(commentObject.username);
    console.log(commentObject.comment);
    console.log(date);

    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);
        console.log("Connected Successfully to Server");
        var productCollection = db.collection('comments');
        var collection2 = db.collection('comments');

        collection2.insert(commentObject, function(err, result) {
            console.log("Inserted Comment into the Collection Comments");
        });
        res.render('redirect', {
            title: ""
        });
        db.close();
    });
});


router.get('/', function(req, res, next) {
    res.render('themadguy', {
        title: ""
    });
});

module.exports = router;
