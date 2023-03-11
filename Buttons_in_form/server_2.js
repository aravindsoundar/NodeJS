var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/form.html', function (req, res) {
 res.sendFile( __dirname + "/" + "form.html" );
})
app.post('/process_post2', urlencodedParser, function (req, res) {
response = {
 first_name:req.body.first_name,
 last_name:req.body.last_name,
 gender:req.body.optradio,
 vehicle:req.body.vehicle,
 dog:req.body.dog
 };
 console.log(response);
 res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
 var host = server.address().address
 var port = server.address().port
 
 console.log("Example app listening at http://%s:%s", host, port)
})
