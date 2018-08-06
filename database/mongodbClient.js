const MongoClient = require('mongodb').MongoClient;
const { requestStatisticsCan } = require('./statisticsAPIRequests');
// const { DB, COLLECTION } = require('./constants');
const DB = 'stats';
const COLLECTION = 'collection1';

const uri =
  'mongodb+srv://mengqi:zmq5050-124124@stats-cluster0-lthhd.mongodb.net';

const selectDocumentById = async id => {
  const client = await MongoClient.connect(
    uri,
    { useNewUrlParser: true }
  );
  const db = client.db(DB);
  const collection = db.collection(COLLECTION);

  const document = await collection.find({ index: id }).toArray();

  client.close();
  return document;
};

const insertManyDocuments = async () => {
  let client;

  try {
    client = await MongoClient.connect(
      uri,
      { useNewUrlParser: true }
    );
    console.log('Connected correctly to MongoDB Alas');

    const db = client.db(DB);

    const documents = await requestStatisticsCan();

    r = await db.collection(COLLECTION).insertMany(documents);

    console.log('res', r);
  } catch (err) {
    console.log(err.stack);
  }

  client.close();
};

// insertManyDocuments();

module.exports = {
  selectDocumentById,
};
