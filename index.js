var express = require('express')
var fs = require('fs')
var buffer = require('buffer')
var response = require('response')
var app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/'))


app.get('/', function(request, response) {
    var PrintedText = fs.readFileSync('bitstarter_index.html', "utf8")
    
	
  response.send(PrintedText)
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})


