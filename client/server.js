const express = require('express');
const path = require('path');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Client running on port ${PORT}`);
});
