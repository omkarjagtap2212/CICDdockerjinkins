// Import the Express.js framework
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  // Send the response "Hello, World!"
  res.send('Hello, World!');
});

// Start the server and listen for incoming HTTP requests
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

