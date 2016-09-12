var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//


var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
	res.setHeader('Access-Control-Allow-Origin', '*');
	// res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	// res.setHeader('Access-Control-Allow-Methods', 'GET,PATCH,POST,PUT,DELETE');
  proxy.web(req, res, {
    target: 'http://localhost:8086'
  });
});

console.log("listening on port 8000")

server.listen(8000);


//
// Create your target server
//
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
//   res.end();
// }).listen(9000);