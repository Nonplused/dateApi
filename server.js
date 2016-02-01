//Dependencies
var express = require('express');

//Express
var app = express();
app.set('view engine', 'jade');
app.set('views', './views');
//app.set('port', (process.env.PORT || 5000));

//Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.use('/api', require('./routes/api'));

//Start server
app.listen(5000);