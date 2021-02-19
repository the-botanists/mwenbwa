// import {ObjectId} from "mongodb";
import mongoose from "mongoose"; // , {ObjectId}

const treesSchema = mongoose.Schema({
    locked: {
        type: Boolean,
        required: true,
    },
    geoloc: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    height: {
        type: Number,
        required: true,
    },
    latinName: {
        type: String,
        required: true,
    },
    generatedName: {
        type: String,
        required: true,
    },
    diametre_cime: {
        type: Number,
        required: true,
    },
    circonf: {
        type: Number,
        required: true,
    },
    owner: {
        type: String,
    },
    treevalue: {
        type: Number,
        required: true,
    },
    leafs: {
        type: Number,
        required: true,
    },
});

export default mongoose.model("Trees", treesSchema);
