//Dependencies
var express = require('express');

//Express
var app = express();
app.set('views', './views');
app.set('view engine', 'jade');
  
//Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.use('/api', require('./routes/api'));

//Start server
app.listen(5000);
console.log('API on port: 5000');