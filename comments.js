// Create web server

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