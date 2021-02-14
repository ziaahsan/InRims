"use strict";

// Package import
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');

// Setting up cors for specific origins
const corsOptions = {
   origin: ['http://192.168.2.31', 'https://api.inrims.com', 'https://inrims.com'],
   optionsSuccessStatus: 200
}

// Express app
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.set('json spaces', 4);

// Import Routes
require('./routes/rimsRoute')(app);

const PORT = process.env.PORT || config.get("server").port;
app.listen(PORT, () => { console.log(`[App] Running on port ${PORT}`) });
