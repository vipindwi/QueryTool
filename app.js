const express = require('express');
const app = express();
var query = require('./queryRouter');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('views'));

app.engine('html', require('ejs').renderFile);

// use the router file
app.use('/query', query);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
