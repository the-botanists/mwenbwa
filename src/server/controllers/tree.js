import Tree from "../models/tree";

const getAllTree = async (req, res) => {
    try {
        const allTrees = await Tree.find();
        res.status(200).json(allTrees);
    } catch (error) {
        res.status(400).json({error});
    }
};

const getOneTree = (req, res) => {
    Tree.findOne({_id: req.params.id})
        .then(tree => res.status(200).json({tree}))
        .catch(error => res.status(404).json({error}));
};

const deleteTree = (req, res) => {
    Tree.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(() => res.status(200).json({message: "This tree is updated !"}))
        .catch(error => res.status(400).json({error}));
};

const removeTree = (req, res) => {
    Tree.deleteOne({_id: req.params.id})
        .then(() =>
            res.status(200).json({message: "This tree is Destroyed  !"}),
        )
        .catch(error => res.status(400).json({error}));
};

const createTree = (req, res) => {
    delete req.body._id;
    const tree = new Tree({
        ...req.body,
    });
    tree.save()
        .then(() => res.status(201).json({message: "Tree add !"}))
        .catch(error => res.status(400).json({error}));
};

export default {getAllTree, getOneTree, deleteTree, removeTree, createTree};
