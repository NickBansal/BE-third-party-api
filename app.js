const express = require('express');
const app = express();
const router = require('./router/router.js');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.use('/api', router);

app.use('/*', (req, res, next) => {
  next({ status: 404, msg: 'page not found' });
})

// app.use((err, req, res, next) => {});

module.exports = app;
