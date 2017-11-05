const express = require('express');
const app = express();
var query = require('./queryRouter');


// use the router file
app.use('/query', query);

app.listen(3000, () => console.log('Example app listening on port 3000!'));