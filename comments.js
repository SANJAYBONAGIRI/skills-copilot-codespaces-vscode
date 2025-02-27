// Create web server 
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should contain the following text:
// <html>
// <head>
// <title>Comments</title>
// </head>
// <body>
// <h1>Comments</h1>
// <p>Comment 1</p>
// <p>Comment 2</p>
// <p>Comment 3</p>
// </body>
// </html>
// The server should respond to the /comments route and return the comments.html file.
// The server should respond to all other routes with a 404 status code and the following text:
// Not found
// The server should respond to all requests with a 200 status code.
// The server should respond with the text/html content type.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile('comments.html', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('Not found');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000);