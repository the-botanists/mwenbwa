import Tree from "../models/tree";
const Score = require("../models/score");
const ObjectID = require("mongodb").ObjectID;
import {nameByRace} from "fantasy-name-generator";

async function setNewTree(newUserOwner, userColor, onTreeId) {
    console.log("START Set New Tree");
    try {
        console.log(`Add Tree: ${onTreeId}`);
        const treeFranName = nameByRace("goblin");
        await Tree.updateOne(
            {_id: ObjectID(onTreeId).valueOf()},
            {
                $set: {
                    owner: newUserOwner,
                    friendlyname: treeFranName,
                    color: userColor,
                },
            },
        );
        console.log(`Tree add to USER:${newUserOwner}`);
    } catch (error) {
        console.log(error);
    }
}

async function updateUserScore(userToUPD, treeValueCost) {
    console.log("START update User Score");
    try {
        const currentScore = await Score.findOne({username: userToUPD});
        const onScoreId = currentScore._id;
        const updNbLeafs = currentScore.numOfLeafs - treeValueCost;
        const updNbTrees = currentScore.numOfTrees + 1;
        await Score.updateOne(
            {_id: ObjectID(onScoreId).valueOf()},
            {
                $set: {
                    numOfLeafs: updNbLeafs,
                    numOfTrees: updNbTrees,
                },
            },
        );
        console.log(`USER Score UPDATED : ${userToUPD}`);
    } catch (error) {
        console.log(error);
    }
}

const buyATree = async (req, res) => {
    const {username, treeid, treevalue, color} = await req.body;
    try {
        console.log(username);
        console.log(treeid);
        console.log(treevalue);
        console.log(color);
        setNewTree(username, color, treeid);
        updateUserScore(username, treevalue);

        res.status(200).send(`Tree Buy`);
    } catch (err) {
        res.status(500).send("Error in Saving");
    }
};

export default {buyATree};
