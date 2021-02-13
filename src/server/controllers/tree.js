import Tree from "../models/tree";

const list = (req, res) => {
    Tree.find()
        .then(trees => res.status(200).json(trees))
        .catch(error => res.status(400).json({error}));
};

const read = (req, res) => {
    Tree.findOne({_id: req.params.id})
        .then(tree => res.status(200).json({tree}))
        .catch(error => res.status(404).json({error}));
};

export default {list, read};
