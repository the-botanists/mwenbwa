const Score = require("../models/score");

exports.createScore = async (req, res) => {
    const score = new Score(req.body);
    try {
        await score.save();
        res.status(201).json(score);
    } catch (error) {
        res.status(404).json({error});
    }
};

exports.getOneScore = async (req, res) => {
    const score = await Score.findOne({_id: req.params.id});
    try {
        res.status(200).json(score);
    } catch (error) {
        res.status(404).json({error});
    }
};

exports.getOneScoreByUser = async (req, res) => {
    const score = await Score.findOne({_id: req.params.id});
    try {
        res.status(200).json(score);
    } catch (error) {
        res.status(404).json({error: "This username does not exist"});
    }
};

exports.getAllScores = async res => {
    const scores = await Score.find();
    try {
        res.status(200).json(scores);
    } catch (error) {
        res.status(404).json({error});
    }
};

// exports.updateScore = async (req, res) => {
//     try {
//         await Score.findOneAndUpdate(req.params.username, req.body);
//         await Score.save();
//         res.send(score);
//     } catch (error) {
//         res.status(500).send({error});
//     }
// };

exports.deleteScore = async (req, res) => {
    try {
        const score = await Score.findByIdAndDelete(req.params.id);
        if (!score) {
            res.status(404).send("No score found");
        }
        res.status(200).send();
    } catch (error) {
        res.status(500).send({error});
    }
};
