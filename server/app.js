const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const app = express();

// options
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// client path
app.use('/', express.static(path.join(__dirname, '../client/dist')));

module.exports = app;