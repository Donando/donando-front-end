var express = require('express');
var app = express();
var path  = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Fix me: Need a better logic
app.get('/app.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/app.js'));
});

app.get('/common.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/common.js'));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/style.css'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port 3000!');
});
