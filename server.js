var express = require('express');
var app = express();
var path  = require('path')

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'));
});

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(app.get('port'), function () {
  console.log('App listening on port '+app.get('port'));
});