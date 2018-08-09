require('dotenv').config();
const http = require('http');
const express = require('express');
const { json, urlencoded } = require('body-parser');
const {
  selectDocumentById,
  updateDocumentVotes,
} = require('../database/mongodbClient');

const app = express();
app.use(json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/content', async function(req, res) {
  const document = await selectDocumentById(Number(req.query.id));

  res.send(document);
  res.status(200);
});

app.post('/votes', async function(req, res) {
  const mongoResponse = await updateDocumentVotes(req.body.id, req.body.votes);

  res.send({ succeeded: mongoResponse.modifiedCount > 0 });
  res.status(200);
});

// Select a port for the server to listen on.
// NOTE: When using ngrok or localtunnel locally, choose the same port it was started with.
const port = process.env.PORT || 3000;

// Start the express application server
app.listen(port, function() {
  console.log(`server listening on port ${port}`);
});
