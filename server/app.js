const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const app = express();

// options
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;