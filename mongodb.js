const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB server URL
const client = new MongoClient(uri);

async function data() {
    try {
        await client.connect();
        console.log('database connected successfully!');
        var db = client.db("test");
        var cl = db.collection("users");

        var first = await cl.findOne();
        console.log(first.username);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Database closed!");
        client.close();
    }
}

data();