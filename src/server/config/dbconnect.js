const {MongoClient} = require("mongodb");
const url =
    "mongodb+srv://botanistes:kkYos247aWNYxb0j@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);
export {client};

// const express = require(`express`);
//bring in mongoose dependency that we installed
// const mongoose = require(`mongoose`);
//bring in mongo uri from mlab
// const mongoURI =
// "mongodb+srv://botanistes:kkYos247aWNYxb0j@botanistes.tjvkg.mongodb.net/botanistes?retryWrites=true&w=majority";
// mongoose.connect(mongoURI, {
// useMongoClient: true,
// });
// const app = express();
// const port = 5000;
// app.listen(port, () => {
// console.log(`app started on port ${port}`);
// });
