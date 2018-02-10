var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//express.static(root, [options])
//app.use(express.static('./app/public/assets/css'))
app.use(express.static('./app/public/'))
//app.use(express.static('files'))
//app.use(express.static('./app/public/assets/img'))

require('./app/routing/htmlRoutes.js')(app, path);
require('./app/routing/apiRoutes.js')(app, path);
// Sets up the Express app to handle data parsing



app.listen(PORT, function(){
     console.log(" Listening on port " + PORT)
});


