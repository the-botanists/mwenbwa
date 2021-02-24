//import Tree from "../models/tree";
// const ObjectID = require("mongodb").ObjectID;

const buyATree = (req, res) => {
    //async
    const {username, treeid, treevalue, color} = req.body;
    try {
        console.log(username);
        console.log(treeid);
        console.log(treevalue);
        console.log(color);
        res.status(200).send(
            `Tree Buy${username}${treeid}${treevalue}${color}`,
        );
    } catch (err) {
        res.status(500).send("Error in Saving");
    }
};

export default {buyATree};
