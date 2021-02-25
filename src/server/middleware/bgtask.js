// import React, {useState, useEffect} from "react";
import Score from "../models/score";
import Tree from "../models/tree";
const ObjectID = require("mongodb").ObjectID;
const User = require("../models/user");

let counter = 0;

// Set Leaf + add to score
async function updateUserScores(forOneUser, totalTreeUser) {
    try {
        const ttLeafs = await Tree.aggregate([
            {$match: {owner: forOneUser}},
            {
                $group: {
                    _id: null,
                    TotalLeafs: {
                        $sum: "$treevalue",
                    },
                },
            },
        ]);
        const ttLeafs1 = ttLeafs[0].TotalLeafs;
        // console.log(`☣️  TOTAL Leafs for ${forOneUser}: ${ttLeafs1}`);
        const currentScore = await Score.findOne({username: forOneUser});
        const onScoreId = currentScore._id;
        let updNbLeafs = parseInt(currentScore.numOfLeafs) + parseInt(ttLeafs1);
        if (counter % 4 === 0) {
            updNbLeafs = Math.ceil(updNbLeafs / 2);
        }
        console.log(
            `🔮 TOTAL LEAFs OLD: ${parseInt(
                currentScore.numOfLeafs,
            )} ---- NEW: ${updNbLeafs}`,
        );
        await Score.updateOne(
            {_id: ObjectID(onScoreId).valueOf()},
            {
                $set: {
                    numOfLeafs: updNbLeafs,
                    numOfTrees: totalTreeUser,
                },
            },
        );
        console.log(`✔️  USER Score UPDATED 🏁 : ${forOneUser}`);
    } catch (error) {
        console.log(error);
    }
}

async function getAllUsers() {
    try {
        const selectAllUsers = await User.find();
        selectAllUsers.map(async oneUser => {
            //console.log(`User: ${oneUser.username}`);
            const totalTreeUser = await Tree.countDocuments({
                owner: oneUser.username,
            });
            console.log(`🌳 Total Tree user: ${totalTreeUser}`);
            updateUserScores(oneUser.username, totalTreeUser);
        });
        console.log(`All 🌿 and 🌳 updated`);
    } catch (error) {
        console.log(error);
    }
}

function bgTask() {
    counter++;
    console.log(`   🔄  Counter Task : ${counter} 🔄`);
    console.log("🕒 ➕ ADD LEAF 15 MIN 🥳");
    getAllUsers();
    if (counter % 4 === 0) {
        console.log("🕐 ➗ REMOVE LEAF 60 MIN 🌀 😢");
    }
}

export default bgTask;
