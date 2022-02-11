require("dotenv").config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser')

const app = express();
const server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const DB = require("./config/db")
