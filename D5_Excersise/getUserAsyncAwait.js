var express = require('express');
var fetch = require('node-fetch');
var consolidate = require('consolidate');
var app = express();

app.set('view engine', 'html');
app.engine('html', consolidate.ejs);
app.set('views', __dirname);
app.set('trust proxy', true);
app.set('case sensitive routing', true);
app.set('strict routing', true);
app.set('view cache', true);

app.get('/users/', async function(request, response) {
  try {
    let users = await fetch('http://jsonplaceholder.typicode.com/users/').then(
      function(res) {
        return res.json();
      }
    );
    response.render('users', { users: users });
  } catch (e) {
    throw e;
  }
});

app.listen(8000, () => {
  console.log('server is running');
});
