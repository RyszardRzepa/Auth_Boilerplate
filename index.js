/**
 * Created by abc on 01/01/2017.
 */
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const routerJs = require('./routerJs');


const app = express();

//DB setup
mongoose.connect('mongodb://localhost:auth/auth');

// app.use register middlewares. Morgan just logging incoming request. Mostly used for debugging
app.use(morgan('combined'));

//bodyParser will parse incoming request in json and it will atempt to do so
// no mather what type of request is */*
app.use(bodyParser.json({type: '*/*'}));

routerJs(app);

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log("serrer listening on port:", port);