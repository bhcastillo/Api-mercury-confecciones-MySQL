const express = require('express'),
  morgan = require('morgan'),
  app = express(),
  router = require('./router');

app.set('port', process.env.PORT);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((req, res, next) => {
  //https://enable-cors.org/
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  next();
});
app.use(morgan('dev'));
app.use('/api', router);

module.exports = app;
