/**
 * Created by rohithvutnoor on 01-Aug-17.
 */
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
/* GET home page. */
router.get('/', function(req, res, next) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected Successfully to Server");
        var productCollection = db.collection('comments');

        function productRendering(callback) {
            productCollection.find({}).toArray(function (err, productList) {
                //Don't forget to give the calculated value to the callback function
                callback(productList); //Once you are done do `callback()`
                console.log(productList);
            });
        }
        productRendering(function (result) {
            tot = result;
            res.render('itsokay', {
                title: "",
                remote: result
            });
        });
        db.close();
    });
});

module.exports = router;
