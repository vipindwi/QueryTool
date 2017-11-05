var express = require('express');
var router = express.Router()

//define the routes.
router.get('/', function (request, response){
	response.render('index.html');
});




module.exports = router