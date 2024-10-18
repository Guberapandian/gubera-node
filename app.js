const express = require('express');
const app = express();
const port = 6060;

// Serve static files from the "views" directory
app.use(express.static('views'));

// Define a simple route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});
