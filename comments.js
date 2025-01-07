// Create a web server that outputs a hello world message in response to any request
// The server should listen on port 3000

const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});