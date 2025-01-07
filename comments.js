// Create a web server that listens on port 3000
// Create a route for POST /comments
// When the route is hit, save the comment to the comments.json file
// If the file does not exist, create it

// Load the express module
const express = require('express');
// Load the fs module
const fs = require('fs');

// Create a new express app
const app = express();

// Middleware to parse the body of the request
app.use(express.json());

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  // Read the comments.json file
  fs.readFile('comments.json', 'utf8', (err, data) => {
    // If the file does not exist
    if (err) {
      // Create the file with an empty array
      fs.writeFile('comments.json', '[]', (err) => {
        if (err) {
          res.status(500).send('Error creating comments.json');
        }
      });
    }

    // Parse the data from the file
    const comments = JSON.parse(data);

    // Add the new comment to the array
    comments.push(req.body);

    // Write the updated array to the file
    fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
      if (err) {
        res.status(500).send('Error writing to comments.json');
      } else {
        res.status(201).send('Comment saved');
      }
    });
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});