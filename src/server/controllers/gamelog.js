import Gamelog from "../models/gamelog";
// const ObjectID = require("mongodb").ObjectID;

const getGamelog = (req, res) => {
    Gamelog.find()
        .sort({ "_id": -1  })
        .limit(250)
        .then(theGamelog => res.status(200).json(theGamelog))
        .catch(error => res.status(404).json({error}));
};

export default {getGamelog};
