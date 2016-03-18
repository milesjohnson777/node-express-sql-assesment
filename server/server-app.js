//VARS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/index');
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/ZOO';
var random = require('./routes/random');
//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/random', random);
app.use("/", index);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
