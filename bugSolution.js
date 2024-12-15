```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Corrected query to fetch data more efficiently
    const query = { /*add specific query criteria here*/ };
    const result = await collection.find(query).toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```