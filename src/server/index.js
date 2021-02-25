import path from "path";
import treeRoutes from "./routes/tree";
import scoreRoutes from "./routes/score";
import bgTask from "./middleware/bgtask";
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
app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./bin/client/index.html"));
});
/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);
app.use("/api/trees", treeRoutes);
app.use("/api/scores", scoreRoutes);

//app.get("*", (req, res) => {
//     res.sendFile(path.resolve("ERROR 404"));
// });
app.listen(PORT, () => {
    console.log(`🚀 Server Started at PORT ${PORT}`);
});

setInterval(bgTask, 1000 * 60 * 15);
