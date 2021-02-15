const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator"); //Vérifictaion unique mail adress

const userShema = mongoose.Schema({
    email: {
        type: {
            type: String,
            required: true,
            unique: true,
        },
    }, //unique first vérification unique mail adress
    password: {
        type: {
            type: String,
            require: true,
        },
    },
});

userShema.plugin(uniqueValidator); //vérification unique mail adress

module.exports = mongoose.model("user", userShema);
