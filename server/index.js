#!/usr/bin/env node
"use strict";

// Package import
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');

// Models
const EmailModel = require('./models/emailModel');
const ses = new EmailModel();

// Setting up cors for specific origins
const corsOptions = {
   origin: ['http://192.168.2.31', 'https://inrims.com'],
   optionsSuccessStatus: 200
}

// Express app
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.set('json spaces', 4);

// Import Routes
require('./routes/rimsRoute')(app, ses);

const PORT = process.env.PORT || config.get("server").port;
app.listen(PORT, () => { console.log(`[App] Running on port ${PORT}`) });
