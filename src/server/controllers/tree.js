import Tree from "../models/tree";

const getAllTree = async (req, res) => {
    try {
        const allTrees = await Tree.find();
        res.status(200).json(allTrees);
    } catch (error) {
        res.status(400).json({error});
    }
};

const getOneTree = async (req, res) => {
    try {
        const oneTree = await Tree.findOne({_id: req.params.id});
        console.log(oneTree);
        res.status(200).json({oneTree});
    } catch (error) {
        res.status(404).json({error});
    }
};

const updateTree = async (req, res) => {
    try {
        await Tree.updateOne(
            {_id: req.params.id},
            {...req.body, _id: req.params.id},
        );
        await res.status(200).json({message: "This tree is updated !"});
    } catch (error) {
        res.status(400).json({error});
    }
};

const removeTree = async (req, res) => {
    try {
        await Tree.deleteOne({_id: req.params.id});
        await res.status(200).json({message: "This tree is Destroyed  !"});
    } catch (error) {
        res.status(400).json({error});
    }
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

export default {getAllTree, getOneTree, updateTree, removeTree, createTree};
