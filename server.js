'use strict';

const express = require("express");
const bodyParser = require('body-parser');

const addRoutes = require('./routes');

let server = express();

server.use(bodyParser.json());

addRoutes(server);

const path = __dirname + ( process.argv[2] || '.');
const port = process.argv[3] || '3000';

console.log("Server path[" + path + "]...");

server.use(express.static(path));
server.listen(port);

console.log("Server listening on localhost:" + port + "...");
