//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const {APP_PORT} = process.env;

//Connexion à la base de donnée
mongoose
    .connect(
        "mongodb+srv://battletree:zD4V1183RRGf5DBF@botanistes.tjvkg.mongodb.net/botanistes?retryWrites=true&w=majority",
    )
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch(e => {
        console.log("Error while DB connecting");
        console.log(e);
    });

//On définit notre objet express nommé app
const app = express();

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true,
});
app.use(urlencodedParser);

app.use(bodyParser.json());

//Définition des CORS
app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type",
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

//Définition du routeur
const router = express.Router();
app.use("/user", router);
require(`${__dirname}/controllers/user-controller`)(router);

//Définition et mise en place du port d'écoute
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is zzzzz on port ${APP_PORT}.`),
);
