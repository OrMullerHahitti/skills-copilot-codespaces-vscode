// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');

// 2. Create server
http.createServer(function (req, res) {
    // 3. Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // 4. Send the response body "Hello World"
    fs.readFile('comments.html', function(err, data) {
        res.write(data);
        return res.end();
    });
}).listen(8080);

// Console will print the message
console.log('Server running at http://