var express = require('express');
var app = express();
var cors = require('cors');
var router = express.Router();
var morgan = require('morgan');
var validator = require('express-validator');
var Database = require('./database');
var db = new Database();
const CustomValidator = require('./customValidator');
var customValidator = new CustomValidator();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(validator());
app.use(morgan('combined'));

app.post('/api/grades', function(req, res) {
  var errors = customValidator.validate(req);
  if (errors) {
    res.send(400, errors);
    return;
  }
  db.add(req.body);
  res.json(req.body);
});
app.get('/api/grades', function(req, res) {
  res.json(db.grades);
});

app.get('/api/grades/:id', function(req, res) {
  const grade = db.find(req.params.id);
  if (!grade) {
    res.sendStatus(404);
    return;
  }
  res.json(grade);
});
app.put('/api/grades/:id', function(req, res) {
  var errors = customValidator.validate(req);
  if (errors) {
    res.send(400, errors);
    return;
  }
  if (!db.update(req.params.id, req.body)) {
    res.sendStatus(404);
    return;
  }
  res.json(req.body);
});
app.delete('/api/grades/:id', function(req, res) {
  if (!db.delete(req.params.id)) {
    res.sendStatus(404);
    return;
  }
  res.sendStatus(200);
});

app.listen(4000);
console.log('server is running');
