var express = require('express');
var app = express();

app.configure(function() {
    app.engine('html', require('uinexpress').__express)
    app.set('view engine', 'html')                      
    app.set('views', __dirname + "/html");
    app.set("view options", {layout: 'layout.html'});
    app.use(express.static(__dirname + "/public"));
});

app.get('/', function(req, res){
	res.render('index.html');
});

var port = process.env.PORT || 5000;       
app.listen(port);
console.log("Listening at " + port);