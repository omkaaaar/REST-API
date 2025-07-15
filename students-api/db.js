const { MongoClient } = require("mongodb");
require("dotenv").config();

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = "studentDB";
const collectionName = "students";

let collection;

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    collection = db.collection(collectionName);
    console.log("Connected to collection");
  } catch (err) {
    console.log(err);
  }
}
module.exports = { connectDB, collection: () => collection };
