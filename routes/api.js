//Dependencies
var express = require('express');
var router = express.Router();
var stringToDate = require('../modules/string-to-date');

router.get('/:date', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  
  res.send(JSON.stringify(stringToDate(req.params.date)));
});

//Return router
module.exports =  router;