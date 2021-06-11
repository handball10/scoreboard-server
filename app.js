var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const websocket = require('./lib/websocket/websocketServer');
const cors = require('cors');

var indexRouter = require('./routes/index');
var gameDataRouter = require('./routes/gameData');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/scoreboard')));

app.use('/', indexRouter);
app.use('/game', gameDataRouter);

module.exports = app;
