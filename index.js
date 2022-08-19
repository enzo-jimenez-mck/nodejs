const http = require('http');

http.createServer(function (req, res) {
  res.write('<img src="https://raw.githubusercontent.com/enzo-jimenez-mck/nodejs/blob/main/k8s.jfif" />');
  res.end();
}).listen(8080);
