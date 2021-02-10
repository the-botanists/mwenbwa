import express from "express";
import path from "path";
import mongoose from "mongoose";

const {APP_PORT} = process.env;

const app = express();

// var routes = require('./routes')(app);
app.get("/game", (request, response) => {
    response.render("../client/app2.js");
});

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
// Database Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb+srv://botanistes:kkYos247aWNYxb0j@botanistes.tjvkg.mongodb.net/botanistes?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    () => console.log("dbconected"),
);
mongoose.connection.on("error", () => {
    throw new Error(`Unable to connect to database`);
});
