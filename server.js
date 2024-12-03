const express = require('express');
const path = require('path');
const prerenderMiddleware = require('prerender-node');
const prerender = require('prerender');

const app = express();

// Start Prerender server in the same process
const prerenderServer = prerender({
  chromeLocation: '/usr/bin/google-chrome-stable', // Heroku environment variable
  logRequests: true, // Optional Logs requests
});
prerenderServer.start();

// Set up Prerender middleware to use the internal server
app.use(
  prerenderMiddleware.set('prerenderServiceUrl', 'http://localhost:5001/') // Use local Prerender server
);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Start Prerender server on a different port
prerenderServer.startServer(port + 1);
