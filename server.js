const express = require('express');
const path = require('path');

const app = express();


process.env.NODE_ENV = "PRODUCTION1"; 

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, './build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
