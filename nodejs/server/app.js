var http = require('http');
var fs  = require('fs');
http.createServer(function(request, response){
    response.writeHead(200, {
        'Content-Type' : 'application/json'
    });
    //var html = fs.readFileSync(__dirname + '/index.html');
    //response.end(html);
    var obj = {
        firstname: "Andy", 
        lastname: "Feng"
    };
    response.end(JSON.stringify(obj));
}).listen(7300, '127.0.0.1');