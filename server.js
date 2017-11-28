// server.js
const express = require('express');
//const MongoClient    = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dbData = require('./config/db');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('-- Listening on port: ' + port);
});

// init database
dbData.init();

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
