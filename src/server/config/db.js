//FILENAME : db.js

const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI =
    "mongodb+srv://battletree:zD4V1183RRGf5DBF@botanistes.tjvkg.mongodb.net/botanistes?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        console.log("💫 Connected to DB !! 👌");
    } catch (e) {
        console.log(e);
        throw e;
    }
};
mongoose.connection.on("error", () => {
    throw new Error(`💣 ... 💥 Unable to connect to database`);
});
module.exports = InitiateMongoServer;
