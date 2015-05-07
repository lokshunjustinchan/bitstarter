var express = require('express')
var fs = require('fs')
var buffer = require('buffer')
var response = require('response')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


app.get('/', function(request, response) {
    var PrintedText = fs.readFileSync('index.html', "utf8")
    
	
  response.send(PrintedText)
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

/*
var textToBePrinted = fs.readFile('index.html', 'utf8');

var buffer = new Buffer(100)
buffer.write("index html from index.html","utf-8")
buffer.toString("utf-8")

*/