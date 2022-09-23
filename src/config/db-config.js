const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://victoramaral22:M0xXhoYmFO7Bnert@cluster0.44rrms7.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'DS1database';

async function ConnectMongoDB() {
    // Use connect method to connect to the server
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('city-history');
    
        // the following code examples can be pasted here...
    
        return collection;
    } catch (error) {
        return null;
    }
}

module.exports = { ConnectMongoDB }