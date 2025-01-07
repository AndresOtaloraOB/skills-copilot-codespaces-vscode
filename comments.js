// Create a web server that outputs a "Hello World" message in response to any request
// The server will handle incoming HTTP requests and respond with a simple message
// The server is configured to listen on port 3000

const http = require('http'); // Import the HTTP module to create the server

// Create the server
const server = http.createServer((req, res) => {
    // Set the response headers (optional, to specify content type)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the "Hello World" response
    res.end('Hello World');
});

// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});