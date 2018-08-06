const MongoClient = require('mongodb').MongoClient;

// const { DB, COLLECTION } = require('./constants');
const { findById } = require('./query');
const { promisify } = require('util');
const DB = 'stats';
const COLLECTION = 'collection1';

const uri =
  'mongodb+srv://mengqi:zmq5050-124124@stats-cluster0-lthhd.mongodb.net';

async function selectDocumentById(id) {
  const client = await MongoClient.connect(
    uri,
    { useNewUrlParser: true }
  );
  const db = client.db(DB);
  const collection = db.collection(COLLECTION);

  const document = await collection.find({ index: id }).toArray();

  client.close();
  return document;
}

module.exports = {
  selectDocumentById,
};
