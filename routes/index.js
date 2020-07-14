var express = require('express');
var router = express.Router();
var request = require('sync-request');


/* GET home page. */
router.get('/', function(req, res, next) {
  var result = request("GET", "https://jsonplaceholder.typicode.com/users");
  var resultJSON = JSON.parse(result.getBody())
  res.json(resultJSON);
});

module.exports = router;
