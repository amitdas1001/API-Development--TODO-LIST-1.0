var express = require('express')
var app = express()
var mongoose = require('mongoose')
var Task = require('./api/models/todoListModel')
var bodyParser = require('body-parser')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(3000,()=>{
    console.log("todo list RESTful API server started on:",3000)
})