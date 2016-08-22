// dependencies from node
const http = require('http');
const path = require('path');

// dependencies from npm (package.json)
const express = require('express');
const bodyParser = require('body-parser');


// routes
const index = require('./routes/index');
const names = require('./routes/names');

// views
const ejs = require('ejs');

// Initialize our app
const app = express();

// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Add middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set our routes
app.use('/', index);
app.use('/names', names);

// Set up our server
const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);
