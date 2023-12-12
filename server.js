const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

// Serve the static files from the Vue.js app
app.use(serveStatic(path.join(__dirname, '/dist')));

// Set port
const port = process.env.PORT || 5000;
app.listen(port);

console.log('Server started on port ' + port);