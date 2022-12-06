require('dotenv').config();
const path = require('path');
const http = require('http');
const express = require('express');
const apiRoutes = require('./routes');

// Database connection
const connectDB = require('./config/database');
connectDB();

// Initialize the app
const app = express();

// Initialize the port
const port = process.env.PORT || 3000;

// Setup body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup static file
app.use('/static', express.static(path.join(__dirname, 'public')));

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api', apiRoutes);

// Create server
const server = http.createServer(app);

// Listening to the server
server.listen(port, () => console.log(`Server listening on the port: ${port}`));
