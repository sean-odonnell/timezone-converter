const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./timezones.js')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/times', (req,res) => {
	res.json(api)
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;