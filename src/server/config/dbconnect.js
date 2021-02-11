// const express = require(`express`);
// //bring in mongoose dependency that we installed
// const mongoose = require(`mongoose`);
// //bring in mongo uri from mlab
// const mongoURI =
//     "mongodb+srv://botanistes:kkYos247aWNYxb0j@botanistes.tjvkg.mongodb.net/botanistes?retryWrites=true&w=majority";
// mongoose.connect(mongoURI, {
//     useMongoClient: true,
// });
// const app = express();
// const port = 5000;
// app.listen(port, () => {
//     console.log(`app started on port ${port}`);
// });

// import {insertDocuments} from "../insertdocs";

// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");

// // Connection URL
// const url =
//     "mongodb+srv://botanistes:kkYos247aWNYxb0j@botanistes.tjvkg.mongodb.net";

// // Database Name
// const dbName = "botanistes";

// // Use connect method to connect to the server
// MongoClient.connect(url, (err, client) => {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     insertDocuments(db, () => {
//         client.close();
//     });
// });
