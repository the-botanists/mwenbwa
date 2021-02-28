const Score = require("../models/score");

export const createScore = async (req, res) => {
    try {
        const score = await new Score({...req.body});
        score.save();
        res.status(201).json(score);
    } catch (error) {
        res.status(404).json({error});
    }
};

export const getOneScore = async (req, res) => {
    try {
        const score = await Score.findOne({_id: req.params.id});
        res.status(200).json(score);
    } catch (error) {
        res.status(404).json({error});
    }
};

export const getOneScoreByUser = async (req, res) => {
    try {
        const score = await Score.findOne({username: req.params.username});
        res.status(200).json(score);
    } catch (error) {
        res.status(404).json({error});
    }
};

export const getAllScores = async (req, res) => {
    try {
        const scores = await Score.find().sort({numOfTrees: -1});
        res.status(200).json(scores);
    } catch (error) {
        res.status(404).json({error});
    }
};

export const deleteScore = async (req, res) => {
    try {
        const score = await Score.findByIdAndDelete(req.params.id);
        if (!score) {
            res.status(404).send("No score found");
        }
        res.status(200).send("Score deleted");
    } catch (error) {
        res.status(500).send({error});
    }
};
