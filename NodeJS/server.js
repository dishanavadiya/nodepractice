var http=require("http");

var server=http.createServer(function(req,res){
	console.log("Req received = > "+req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write('Nodejs is awesome!! ');
   res.end();
});
server.listen(8080);
console.log("Listening on port no 8080");