// database

const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017';

function init() {
  mongoose.Promise = require('bluebird');
  mongoose.set('debug', true);
  mongoose.connect(url, {
      useMongoClient: true,
      //    config: { autoIndex: false }
    });
//    .then(() => require('./app/routes')(app, db))
//    .catch(err => console.error(err));

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('-- Mongo running --')
  });
}

module.exports = {
  init: init
};
