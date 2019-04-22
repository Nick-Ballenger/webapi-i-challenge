// implement your API here
const express = require('express');
const db = require('./data/db.js');
const server = express();
const PORT = '9001';


server.use(express.json());