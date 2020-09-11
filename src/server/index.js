const express = require('express');
const favicon = require('express-favicon');
const cookieParser = require('cookie-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(favicon(__dirname + '/../../build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/../../build')));

app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../build', 'index.html'));
});

app.listen(PORT, err => {
  if (err) {
    throw err;
  }
  // eslint-disable-next-line
  console.log(`>Frontend ready on http://localhost:${PORT}`);
});
