// import {ObjectId} from "mongodb";
import mongoose from "mongoose"; // , {ObjectId}
const ObjectId = require("mongodb").ObjectID;

const treeSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
    },
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
    friendlyname: {
        type: String,
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
    color: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Tree", treeSchema);
