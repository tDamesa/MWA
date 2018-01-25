var express = require('express');
var app = express();
var mongoclient = require('mongodb').MongoClient;
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const connStr = 'mongodb://127.0.0.1:27017';

mongoclient.connect(connStr, (err, db) => {
  if (err) throw err;
  var dbo = db.db('locationDB');
  dbo.collection('locations').createIndex({ location: '2dsphere' });
});

app.get('/api/locations', function(req, res) {
  let catagory = req.query.catagory;
  let name = req.query.name;
  let query = {
    $and: [
      { catagory: { $eq: req.query.catagory } },
      {
        location: {
          $near: {
            $geometry: { type: 'Point', coordinates: [-91.9667721, 41.017765] },
            $maxDistance: 2000
          }
        }
      }
    ]
  };
  if (name) query.$and.push({ name: { $eq: req.query.name } });
  mongoclient.connect(connStr, (err, db) => {
    if (err) throw err;
    var dbo = db.db('locationDB');
    dbo
      .collection('locations')
      .find(query)
      .limit(3)
      .toArray((err, doc) => {
        if (err) throw err;
        console.log(doc);
        res.json(doc);
        db.close();
      });
  });
});
app.post('/api/locations', (req, res) => {
  mongoclient.connect(connStr, (err, db) => {
    if (err) throw err;
    var dbo = db.db('locationDB');
    var docs = req.body;
    dbo.collection('locations').insert(docs, (err, docsInserted) => {
      if (err) throw err;
      res.json(docsInserted);
      console.dir('successfuly Inserted' + docsInserted);
    });
  });
});

app.put('/api/locations/:name', (req, res) => {
  mongoclient.connect(connStr, (err, db) => {
    if (err) throw err;
    var dbo = db.db('locationDB');
    var query = { name: req.params.name };
    console.log(query);
    var operator = { $set: req.body };
    dbo.collection('locations').update(query, operator, (err, numUpdated) => {
      if (err) throw err;
      console.dir('sucessfully updated' + numUpdated);
      //return dbo.close();
    });
  });
});
app.delete('/api/locations/:name', (req, res) => {
  mongoclient.connect(connStr, (err, db) => {
    if (err) throw err;
    var dbo = db.db('locationDB');
    var query = { name: req.params.name };
    dbo.collection('locations').remove(query, (err, removed) => {
      if (err) throw err;
      console.dir(removed + 'document removed');
    });
  });
});
app.listen(4000);
console.log('running');
