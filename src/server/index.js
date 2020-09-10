const express = require('express');
const favicon = require('express-favicon');
const proxy = require('express-http-proxy');
const cookieParser = require('cookie-parser');
const path = require('path');
console.log('frontend process.env', process.env);
const PORT = process.env.PORT || 3000;
const API_PORT = 3030;

const app = express();

app.use(favicon(__dirname + '/../../build/favicon.ico'));
app.use(cookieParser());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/../../build')));

// passes all api requests through the proxy
app.use('/api', proxy(`http://localhost:${API_PORT}/*`));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../build', 'index.html'));
});
app.listen(PORT);
