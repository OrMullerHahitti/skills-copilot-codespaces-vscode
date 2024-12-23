// Create a web server
// Create a web server that listens on port 3000. When it receives a request, it responds with a random comment from the comments array in comments.js. The response should be in JSON format.
// Example:
// $ curl http://localhost:3000
// {"comment":"What a great day!"}
const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const randomComment = comments[Math.floor(Math.random() * comments.length)];
  res.end(JSON.stringify({ comment: randomComment }));
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});