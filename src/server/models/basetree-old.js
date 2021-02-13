// import {ObjectId} from "mongodb";
import mongoose from "mongoose";

const baseTreeSchema = mongoose.Schema({
    y_lambert72: {type: Number, required: true},
    arbotag: {type: Number, required: true},
    date_donnees: {type: Date, required: true},
    x_lambda: {type: Number, required: true},
    geoloc: {
        lat: {type: Number, required: true},
        lon: {type: Number, required: true},
    },
    hauteur_totale: {type: Number, required: true},
    x_lambert72: {type: Number, required: true},
    y_phi: {type: Number, required: true},
    nom_complet: {type: String, required: true},
    diametre_cime: {type: Number, required: true},
    circonf: {type: Number, required: true},
});

// module.exports = mongoose.model("baseTree", baseTreeSchema);
export default mongoose.model("baseTree", baseTreeSchema);
