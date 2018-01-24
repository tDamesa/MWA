var express = require('express');
var aes256 = require('aes256');
var app = express();
var MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');

app.get('/secret', function(req, res) {
  MongoClient.connect('mongodb://127.0.0.1:27017', (err, db) => {
    if (err) throw err;
    var dbo = db.db('messageDB');
    dbo.collection('homework7').findOne({}, (err, doc) => {
      if (err) throw err;
      let decrypted = decipher.update(doc.message, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      res.end(decrypted);
      db.close();
    });
  });
});

app.listen(4000);
console.log('running');
