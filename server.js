//Dependencies
var express = require('express');

//Express
var app = express();
  
//Routes
app.use('/api', require('./routes/api'));

//Start server
app.listen(5000);
console.log('API on port: 5000');