require('dotenv').config();
const http = require('http');
const express = require('express');
const { json, urlencoded } = require('body-parser');

const app = express();
// app.use(urlencoded({ extended: false }));
app.use(json());

// Attach the adapter to the Express application as a middleware
// NOTE: The path must match the Request URL and/or Options URL configured in Slack
app.get('/content', function(req, res) {
  // console.log('req', req.query.id);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('hello world');
  res.status(200);
});

// Select a port for the server to listen on.
// NOTE: When using ngrok or localtunnel locally, choose the same port it was started with.
const port = process.env.PORT || 3000;

// Start the express application server
app.listen(port, function() {
  console.log(`server listening on port ${port}`);
});
