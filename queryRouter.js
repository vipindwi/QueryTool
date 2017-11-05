var express = require('express');
var router = express.Router()

//define the routes.
router.get('/', function (request, response){
	response.send('ADS!');
});




module.exports = router