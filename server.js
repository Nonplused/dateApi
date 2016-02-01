//Dependencies
var express = require('express');

//Express
var app = express();
var port = process.env.PORT || 5000;
app.set('view engine', 'jade');
app.set('views', './views');


//Routes
app.get('/', function(req, res) {
  res.render('index');
});
app.use('/api', require('./routes/api'));

//Start server
app.listen(port, function() {
  console.log('App running on port: ' + port);
});