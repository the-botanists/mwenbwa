import path from "path";
const express = require("express");
const bodyParser = require("body-parser");
const user = require("../server/routes/user");
const InitiateMongoServer = require("./config/db");
import treeRoutes from "./routes/tree";
import gamelogRoutes from "./routes/gamelog";
import scoreRoutes from "./routes/score";
import bgTask from "./middleware/bgtask";

// Initiate Mongo Server
InitiateMongoServer();
const app = express();
// PORT
// const PORT = 12345;
const PORT = process.env.PORT || 5000;

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
app.use("/api/gamelog", gamelogRoutes);

//app.get("*", (req, res) => {
//     res.sendFile(path.resolve("ERROR 404"));
// });
app.listen(PORT, () => {
    console.log(`🚀 Server Started at PORT ${PORT}`);
});

setInterval(bgTask, 1000 * 60 * 15);
