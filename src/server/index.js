// import path from "path";
// import treeRoutes from "./routes/tree";
// const userRoutes = require("./routes/user");
// const {APP_PORT} = process.env;
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const app = express();

//Body Parser
// const urlencodedParser = bodyParser.urlencoded({
//     extended: true,
// });
// Database Connection URL
// mongoose.Promise = global.Promise;
// mongoose.connect(
//     `mongodb+srv://battletree:zD4V1183RRGf5DBF@botanistes.tjvkg.mongodb.net/botanistes?retryWrites=true&w=majority`,
//     {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//     },
//     () => console.log("You are connected to the DB Atlas"),
// );
// mongoose.connection.on("error", () => {
//     throw new Error(`Unable to connect to database`);
// });

// app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// app.use("/api/trees", treeRoutes);

// app.use("/api/auth", userRoutes);

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve("./bin/client/index.html"));
// });

//On définit notre objet express nommé app

// app.use(urlencodedParser);

// app.use(bodyParser.json());

//Définition des CORS
// app.use((req, res, next) => {
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "X-Requested-With,content-type",
//     );
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, OPTIONS, PUT, PATCH, DELETE",
//     );
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     next();
// });

//Définition du routeur
// const router = express.Router();
// app.use("/user", router);
// require(`${__dirname}/controllers/user-controller`)(router);

//Définition et mise en place du port d'écoute
// app.listen(APP_PORT, () =>
//     console.log(`🚀 Server is listening on port ${APP_PORT}.`),
// );

const express = require("express");
const bodyParser = require("body-parser");
const user = require("../server/routes/user");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = 12345;

// Middleware
app.use(bodyParser.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "API Working"});
});
/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`);
});
