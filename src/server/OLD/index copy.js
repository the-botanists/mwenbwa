import express from "express";
import path from "path";
import mongoose from "mongoose";
// import { number } from "prop-types";
// const express = require('express');
// const router = express.Router();
// const baseTree = require('./models/basetree');
const bodyParser = require("body-parser");

const {APP_PORT} = process.env;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// var routes = require('./routes')(app);

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
// // Database Connection URL
// mongoose.Promise = global.Promise;
// mongoose.connect(
//     "mongodb+srv://botanistes:kkYos247aWNYxb0j@botanistes.tjvkg.mongodb.net/botanistes?retryWrites=true&w=majority",
//     {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//     },
//     () => console.log("dbconected"),
// );
// mongoose.connection.on("error", () => {
//     throw new Error(`Unable to connect to database`);
// });

mongoose
    .connect(
        "mongodb+srv://botanistes:kkYos247aWNYxb0j@botanistes.tjvkg.mongodb.net/botanistes?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true},
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

//   app.use('/api/stuff', (req, res) => {

//     console.log('222222');
//     const allTrees = baseTree.find().limit(1);
//     console.log('333333');

//     res.status(200).json(allTrees);
//   });

//   router.get('/api/baseTree/:arbotag', function(req, res){
//     baseTree.find({"baseTree.arbotag":req.params.name}).exec(function(err, baseTree){
//     res.send(baseTree);
//     });
// });

// app.use('/api/basetree', baseTree);
// app.use('/api/basetree', baseTree);

// router.get("/api/basetree", async (req, res) => {
//     console.log('11111');
//     try {
//         console.log('222222');
//         const allTrees = await baseTree.find().limit(1);
//         console.log('3333333');
//         // const allTrees = await baseTree.find({ arbotag : 130 }).limit(1);
//         res.status(200).json({allTrees});
//         console.log('444444');
//     } catch (err) {
//         console.log('5555555');
//         res.status(500).json({errors: [{msg: "Server internal error", err}]});
//         console.log('6666666');
//     }
// });

// router.get('/api/basetree', (req, res) => {
//     // try{
//     //     // baseTree => res.status(200).json(baseTree)
//     //     const baseTree = baseTree.find();
//     //     res.json(baseTree);
//     // }catch( err){
//     //     res.json({ message : err })
//     // }
// });
console.log("000000");

// baseTree.find()
// .then(baseTree => res.status(200).json(baseTree))
// .catch(error => res.status(400).json({ error }));

//   const docs = basetree.find();
//   console.log(docs);
