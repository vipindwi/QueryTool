var express = require('express');
var router = express.Router()
var inputQueryController = require('./controllers/inputQueryParser');


//define the routes.
router.get('/', function (request, response){
	response.render('index.html');
});

router.post('/submitQuery', function (request, response){
	console.log ('the request', request.body);
	inputQueryController.parseQueryGraph(request,response);
});


module.exports = router