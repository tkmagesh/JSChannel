var http = require("http"),
	fs = require("fs");

var server = http.createServer(function(req,res){
	console.log(req.url);
	var options = { flags: 'r',
					  encoding: 'utf8',
					  fd: null,
					  mode: 0666,
					  autoClose: true
					};
	var chunksRead = 0;
	var stream = fs.createReadStream("index.html", options);
	/*stream.on("data",function(data){
		res.write(data);
		chunksRead++;
	});
	stream.on("end",function(){
		res.end();
		console.log(chunksRead + " chunks of data are read");
	});*/
	stream.pipe(res);
});
server.listen(8085);
console.log("Server listening on port - 8080..");