import Tree from "../models/tree";
const User = require("../models/user");
const Score = require("../models/score");
const ObjectID = require("mongodb").ObjectID;

async function setUpdateProfile(userID, newUsername, userEmail, userColor) {
    console.log("START Update Users Collection");
    try {
        await User.updateOne(
            {_id: ObjectID(userID).valueOf()},
            {
                $set: {
                    username: newUsername,
                    email: userEmail,
                    color: userColor,
                },
            },
        );
        console.log(`User Updated :${newUsername}`);
    } catch (error) {
        console.log(error);
    }
}

async function updateUserScore(userToUPD, oldusername) {
    console.log("START update User Score");
    try {
        const currentScore = await Score.findOne({username: oldusername});
        const onScoreId = currentScore._id;
        await Score.updateOne(
            {_id: ObjectID(onScoreId).valueOf()},
            {
                $set: {
                    username: userToUPD,
                },
            },
        );
        console.log(`User Score name UPDATED : ${userToUPD}`);
    } catch (error) {
        console.log(error);
    }
}

async function changeTreeOwnerName(oldusername, newUsername, selectedColor) {
    console.log("START Update Tree username + Color");
    try {
        const allTreeOfUser = await Tree.find({owner: oldusername});
        allTreeOfUser.map(async oneTree => {
            console.log(`Tree: ${oneTree._id}`);
            const currentid = oneTree._id;
            await Tree.updateOne(
                {_id: ObjectID(currentid).valueOf()},
                {
                    $set: {
                        owner: newUsername,
                        color: selectedColor,
                    },
                },
            );
        });
        console.log(`Owner Tree changed to :${newUsername}`);
    } catch (error) {
        console.log(error);
    }
}

const userUpdate = async (req, res) => {
    const {_id, username, oldusername, email, oldemail, color} = await req.body;
    try {
        console.log(_id);
        console.log(username);
        console.log(oldusername);
        console.log(email);
        console.log(oldemail);
        console.log(color);

        const testemail = await User.findOne({email});
        console.log(`11111111111${testemail.email}`);
        if (testemail && testemail.email !== oldemail) {
            res.status(400).json({
                msg: "Email Already Exists",
                isPositiv: false,
            });
            return;
        }
        const testPseudo = await User.findOne({username});
        if (testPseudo && testPseudo.username !== oldusername) {
            res.status(400).json({
                msg: "Username Already Exists",
                isPositiv: false,
            });
            return;
        }

        setUpdateProfile(_id, username, email, color);
        updateUserScore(username, oldusername);
        changeTreeOwnerName(oldusername, username, color);

        res.status(200).json({
            msg: "User Updated",
            isPositiv: true,
        });
    } catch (err) {
        res.status(500).json({
            msg: "Error in Saving",
            isPositiv: false,
        });
    }
};

export default {userUpdate};
