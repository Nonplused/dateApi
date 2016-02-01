//Dependencies
var express = require('express');
var router = express.Router();
var stringToDate = require('../modules/string-to-date');

router.get('/*', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(stringToDate(req.url)));
});

//Return router
module.exports =  router;