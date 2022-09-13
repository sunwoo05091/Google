const express = require('express');
const app = express();
const path = require('path');
const home = require('./src/route/home');

app.use(express.static(`${__dirname}/src/public`)); //정적 경로 추가
app.set("views", './src/views');
app.set("view engine", 'ejs');

app.use('/', home);

module.exports = app;