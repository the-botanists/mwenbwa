// import Tree from "../models/tree";
// const User = require("../models/user");
// const Score = require("../models/score");
// const ObjectID = require("mongodb").ObjectID;

const userUpdate = async (req, res) => {
    const {username, treeid, treevalue, color} = await req.body;
    try {
        console.log(username);
        console.log(treeid);
        console.log(treevalue);
        console.log(color);

        res.status(200).send(`User Updated`);
    } catch (err) {
        res.status(500).send("Error in Saving");
    }
};

export default {userUpdate};
