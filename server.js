
var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

mongoose = require('mongoose'),
Task = require('./api/models/apiModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://127.0.0.1:27017/rigveddb'); 
var db ="mongodb+srv://dasisandeep:dasisandeep@mongodb1-o4c4p.mongodb.net/test?retryWrites=true"
mongoose.connect(db)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/apiRoute'); //importing route
routes(app); //register the route

app.listen(port);

console.log('server started on: ' + port);