const express = require('express');
const app = express();
const router = require('./router/router.js');
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use('/api', router);

// app.use('/*', (req, res, next) => next({ status: 404, msg: 'page not found' }));

// app.use((err, req, res, next) => {});

app.listen(9090, () => {
  console.log('Listening on port 9090');
});

module.exports = app;
